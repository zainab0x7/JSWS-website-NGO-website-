import { google } from "googleapis";

export interface ScholarshipApplication {
  id: string;
  fullName: string;
  fatherName: string;
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
 * Credentials and sheet configuration are read strictly from environment variables.
 */
export async function addScholarshipApplication(
  application: ScholarshipApplication
): Promise<void> {
  const projectId = process.env.GOOGLE_PROJECT_ID;
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !privateKeyRaw || !spreadsheetId) {
    const missingVars: string[] = [];
    if (!clientEmail) missingVars.push("GOOGLE_CLIENT_EMAIL");
    if (!privateKeyRaw) missingVars.push("GOOGLE_PRIVATE_KEY");
    if (!spreadsheetId) missingVars.push("GOOGLE_SHEET_ID");
    throw new Error(
      `Google Sheets configuration error: Missing required environment variable(s) in .env.local: ${missingVars.join(", ")}.`
    );
  }

  // Handle escaped newline characters and carriage returns in private key string
  let privateKey = privateKeyRaw.replace(/\\n/g, "\n").replace(/\r/g, "");
  if (privateKey.includes("0xcv8dkdk")) {
    privateKey = privateKey.replace("0xcv8dkdk", "0xcv8dk");
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
      project_id: projectId,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const rowValues = [
    application.id,
    application.fullName,
    application.fatherName,
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

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Applications!A:M",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [rowValues],
    },
  });
}
