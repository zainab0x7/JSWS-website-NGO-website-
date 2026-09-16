import { NextResponse } from "next/server";
import { addContactSubmission } from "@/lib/googleSheets";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, subject } = body;

    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || !name.trim()) {
      errors.name = "Name is required.";
    }
    if (!email || typeof email !== "string" || !email.trim()) {
      errors.email = "Email is required.";
    }
    if (!phone || typeof phone !== "string" || !phone.trim()) {
      errors.phone = "Phone number is required.";
    }
    if (!message || typeof message !== "string" || !message.trim()) {
      errors.message = "Message is required.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please fill all required fields.",
          details: errors,
        },
        { status: 400 }
      );
    }

    const submissionData = {
      id: `CONTACT-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject: (subject || "General Inquiry").trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    console.log("[JSWS Contact/Job Application Received]:", submissionData);

    // Attempt to save to Google Sheets if credentials exist
    try {
      await addContactSubmission(submissionData);
    } catch (sheetErr) {
      console.warn("[JSWS Contact API] Google Sheets save skipped or failed:", sheetErr);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out. We have received your message/application.",
    });
  } catch (error: any) {
    console.error("[JSWS Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to process request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
