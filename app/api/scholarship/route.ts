import { NextResponse } from "next/server";
import { addScholarshipApplication, ScholarshipApplication } from "@/lib/googleSheets";

// Helper function to validate Pakistani phone number format
export function isValidPakistaniPhone(phone: string): boolean {
  if (!phone) return false;
  // Remove spaces, hyphens, and parentheses
  const cleaned = phone.replace(/[\s\-()]/g, "");
  // Regex matches formats: 03001234567, +923001234567, 923001234567, 00923001234567
  const pakPhoneRegex = /^(?:\+?92|0092|0)?3\d{9}$/;
  return pakPhoneRegex.test(cleaned);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      fatherName,
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

    const errors: Record<string, string> = {};

    // 1. Full Name validation
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      errors.fullName = "Student Full Name is required.";
    }

    // 2. Father/Guardian Name validation
    if (!fatherName || typeof fatherName !== "string" || !fatherName.trim()) {
      errors.fatherName = "Guardian / Father Name is required.";
    }

    // 3. Age validation
    const numAge = Number(age);
    if (age === undefined || age === null || age === "" || isNaN(numAge) || numAge <= 0 || numAge > 120) {
      errors.age = "Please enter a valid age (1-120).";
    }

    // 4. Gender validation
    if (!gender || (gender !== "Male" && gender !== "Female" && gender !== "Other")) {
      errors.gender = "Please select a valid gender.";
    }

    // 5. Student Number validation
    if (!studentNumber || typeof studentNumber !== "string" || !studentNumber.trim()) {
      errors.studentNumber = "Student / Registration Number is required.";
    }

    // 6. Phone Number (WhatsApp) validation
    if (!phone || typeof phone !== "string" || !isValidPakistaniPhone(phone)) {
      errors.phone = "Please enter a valid Pakistani phone number (e.g. 03001234567 or +923001234567).";
    }

    // 7. Student Guardian Contact Number validation
    if (!guardianPhone || typeof guardianPhone !== "string" || !isValidPakistaniPhone(guardianPhone)) {
      errors.guardianPhone = "Please enter a valid Pakistani phone number for guardian (e.g. 03001234567 or +923001234567).";
    }

    // 8. Address validation
    if (!address || typeof address !== "string" || !address.trim()) {
      errors.address = "Complete residential address is required.";
    }

    // 9. Educational Level validation
    if (!educationLevel || typeof educationLevel !== "string" || !educationLevel.trim()) {
      errors.educationLevel = "Educational Level is required.";
    }

    // 10. Institution Name validation
    if (!institutionName || typeof institutionName !== "string" || !institutionName.trim()) {
      errors.institutionName = "School / College / University Name is required.";
    }

    // 11. Financial Need validation
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

    console.log("[MASP Scholarship Application Received]:", newApplication);

    // Save to Google Sheets
    try {
      await addScholarshipApplication(newApplication);
    } catch (sheetError: unknown) {
      console.error("[Scholarship API Error] Failed to save application to Google Sheets:", sheetError);
      return NextResponse.json(
        {
          success: false,
          error: "Unable to save scholarship application. Please try again later."
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Scholarship application submitted and saved successfully.",
      applicationId: newApplication.id
    });
  } catch (error: unknown) {
    console.error("[Scholarship API Internal Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to save scholarship application. Please try again later."
      },
      { status: 500 }
    );
  }
}

