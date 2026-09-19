import { google } from "googleapis";

export interface ScholarshipApplication {
  id: string;
  fullName: string;
  fatherName: string;
  studentCnic: string;
  guardianCnic: string;
  age: number;
  gender: string;
  studentNumber: string;
  phone: string;
  guardianPhone: string;
  address: string;
  educationLevel: string;
  institutionName: string;
  financialNeed: string;
  submittedAt: string;
}

/**
 * Appends a new scholarship application row to the Google Spreadsheet.
 * Credentials and sheet configuration are read strictly from server-side environment variables.
 */
export async function addScholarshipApplication(
  application: ScholarshipApplication
): Promise<void> {
  const projectId = process.env.GOOGLE_PROJECT_ID;
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  const missingVars: string[] = [];
  if (!clientEmail) missingVars.push("GOOGLE_CLIENT_EMAIL");
  if (!privateKeyRaw) missingVars.push("GOOGLE_PRIVATE_KEY");
  if (!spreadsheetId) missingVars.push("GOOGLE_SHEET_ID");

  if (missingVars.length > 0) {
    const errorMsg = `[Google Sheets API Error] Missing required environment variable(s): ${missingVars.join(", ")}`;
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  // Handle escaped newline characters, quotes, and carriage returns in private key string
  let privateKey = privateKeyRaw!.trim();
  if (
    (privateKey.startsWith('"') && privateKey.endsWith('"')) ||
    (privateKey.startsWith("'") && privateKey.endsWith("'"))
  ) {
    privateKey = privateKey.slice(1, -1);
  }
  privateKey = privateKey.replace(/\\n/g, "\n").replace(/\r/g, "").trim();

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail!.trim(),
      private_key: privateKey,
      ...(projectId ? { project_id: projectId.trim() } : {}),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const rowValues = [
    application.id,
    application.fullName,
    application.fatherName,
    application.studentCnic,
    application.guardianCnic,
    application.age,
    application.gender,
    application.studentNumber,
    application.phone,
    application.guardianPhone,
    application.address,
    application.educationLevel,
    application.institutionName,
    application.financialNeed,
    application.submittedAt,
  ];

  try {
    // Primary attempt: Try appending to "Applications!A:O" tab
    await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId!.trim(),
      range: "Applications!A:O",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowValues],
      },
    });
    console.log(`[Google Sheets API Success] Appended scholarship application ${application.id} to Applications!A:O`);
  } catch (rangeError: any) {
    console.warn(
      "[Google Sheets API Warning] Could not append to 'Applications!A:O' range, trying fallback range 'A:O':",
      rangeError?.message || rangeError
    );
    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: spreadsheetId!.trim(),
        range: "A:O",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [rowValues],
        },
      });
      console.log(`[Google Sheets API Success] Appended scholarship application ${application.id} to fallback range A:O`);
    } catch (fallbackErr: any) {
      console.error("[Google Sheets API Error] Append failed:", fallbackErr?.message || fallbackErr);
      throw fallbackErr;
    }
  }
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
  submittedAt: string;
}

export async function addContactSubmission(
  submission: ContactSubmission
): Promise<void> {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !privateKeyRaw || !spreadsheetId) {
    console.log("[JSWS Contact Submission Received]:", submission);
    return;
  }

  let privateKey = privateKeyRaw.trim();
  if (
    (privateKey.startsWith('"') && privateKey.endsWith('"')) ||
    (privateKey.startsWith("'") && privateKey.endsWith("'"))
  ) {
    privateKey = privateKey.slice(1, -1);
  }
  privateKey = privateKey.replace(/\\n/g, "\n").replace(/\r/g, "").trim();

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail.trim(),
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const rowValues = [
    submission.id,
    submission.name,
    submission.email,
    submission.phone,
    submission.subject || "",
    submission.message,
    submission.submittedAt,
  ];

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId.trim(),
      range: "Contacts!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [rowValues] },
    });
  } catch {
    await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId.trim(),
      range: "A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [rowValues] },
    });
  }
}

