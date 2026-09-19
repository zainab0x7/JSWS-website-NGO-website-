import { NextResponse } from "next/server";
import { addScholarshipApplication, ScholarshipApplication } from "@/lib/googleSheets";

// Helper function to validate Pakistani phone number format
function isValidPakistaniPhone(phone: string): boolean {
  if (!phone) return false;
  // Remove spaces, hyphens, and parentheses
  const cleaned = phone.replace(/[\s\-()]/g, "");
  // Regex matches formats: 03001234567, +923001234567, 923001234567, 00923001234567
  const pakPhoneRegex = /^(?:\+?92|0092|0)?3\d{9}$/;
  return pakPhoneRegex.test(cleaned);
}

// Helper function to validate Pakistani CNIC / B-Form format (13 digits)
function isValidPakCnic(cnic: string): boolean {
  if (!cnic || typeof cnic !== "string") return false;
  const cleaned = cnic.replace(/\D/g, "");
  return cleaned.length === 13;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      fatherName,
      studentCnic: rawStudentCnic,
      cnic: rawCnic,
      guardianCnic: rawGuardianCnic,
      age,
      gender,
      studentNumber,
      phone,
      guardianPhone,
      address,
      educationLevel,
      institutionName,
      financialNeed
    } = body;

    const studentCnic = typeof rawStudentCnic === "string" ? rawStudentCnic.trim() : (typeof rawCnic === "string" ? rawCnic.trim() : "");
    const guardianCnic = typeof rawGuardianCnic === "string" ? rawGuardianCnic.trim() : "";

    const errors: Record<string, string> = {};

    // 1. Full Name validation
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      errors.fullName = "Student Full Name is required.";
    }

    // 2. Father/Guardian Name validation
    if (!fatherName || typeof fatherName !== "string" || !fatherName.trim()) {
      errors.fatherName = "Guardian / Father Name is required.";
    }

    // 3. Student CNIC or B-Form No. validation
    if (!studentCnic || !isValidPakCnic(studentCnic)) {
      errors.studentCnic = "Valid 13-digit Student CNIC or B-Form No. is required (e.g. 35202-1234567-1).";
    }

    // 4. Parent / Guardian CNIC No. validation
    if (!guardianCnic || !isValidPakCnic(guardianCnic)) {
      errors.guardianCnic = "Valid 13-digit Parent / Guardian CNIC No. is required (e.g. 35202-1234567-1).";
    }

    // 5. Age validation
    const numAge = Number(age);
    if (age === undefined || age === null || age === "" || isNaN(numAge) || numAge <= 0 || numAge > 120) {
      errors.age = "Please enter a valid age (1-120).";
    }

    // 6. Gender validation
    if (!gender || (gender !== "Male" && gender !== "Female" && gender !== "Other")) {
      errors.gender = "Please select a valid gender.";
    }

    // 7. Student Number validation
    if (!studentNumber || typeof studentNumber !== "string" || !studentNumber.trim()) {
      errors.studentNumber = "Student / Registration Number is required.";
    }

    // 8. Phone Number (WhatsApp) validation
    if (!phone || typeof phone !== "string" || !isValidPakistaniPhone(phone)) {
      errors.phone = "Please enter a valid Pakistani phone number (e.g. 03001234567 or +923001234567).";
    }

    // 9. Student Guardian Contact Number validation
    if (!guardianPhone || typeof guardianPhone !== "string" || !isValidPakistaniPhone(guardianPhone)) {
      errors.guardianPhone = "Please enter a valid Pakistani phone number for guardian (e.g. 03001234567 or +923001234567).";
    }

    // 10. Address validation
    if (!address || typeof address !== "string" || !address.trim()) {
      errors.address = "Complete residential address is required.";
    }

    // 11. Educational Level validation
    if (!educationLevel || typeof educationLevel !== "string" || !educationLevel.trim()) {
      errors.educationLevel = "Educational Level is required.";
    }

    // 12. Institution Name validation
    if (!institutionName || typeof institutionName !== "string" || !institutionName.trim()) {
      errors.institutionName = "School / College / University Name is required.";
    }

    // 13. Financial Need validation
    if (!financialNeed || typeof financialNeed !== "string" || !financialNeed.trim()) {
      errors.financialNeed = "Brief explanation of financial need is required.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please correct the highlighted fields.",
          details: errors
        },
        { status: 400 }
      );
    }

    // Generate unique ID and save application payload
    const applicationId = `MASP-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newApplication: ScholarshipApplication = {
      id: applicationId,
      fullName: fullName.trim(),
      fatherName: fatherName.trim(),
      studentCnic,
      guardianCnic,
      age: numAge,
      gender,
      studentNumber: studentNumber.trim(),
      phone: phone.trim(),
      guardianPhone: guardianPhone.trim(),
      address: address.trim(),
      educationLevel: educationLevel.trim(),
      institutionName: institutionName.trim(),
      financialNeed: financialNeed.trim(),
      submittedAt: new Date().toISOString()
    };

    console.log("[MASP Scholarship Application Received]:", newApplication.id, newApplication.fullName);

    // Save to Google Sheets (blocking - must succeed before returning 200)
    await addScholarshipApplication(newApplication);

    return NextResponse.json({
      success: true,
      message: "Scholarship application submitted and saved successfully.",
      applicationId: newApplication.id
    });
  } catch (error: any) {
    console.error("[Scholarship API Error]:", error?.message || error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Unable to save scholarship application. Please try again later."
      },
      { status: 500 }
    );
  }
}
