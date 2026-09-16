import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, role, message } = body;

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

    const volunteerData = {
      id: `VOLUNTEER-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      role: (role || "General Volunteer").trim(),
      message: (message || "").trim(),
      submittedAt: new Date().toISOString(),
    };

    console.log("[JSWS Volunteer Application Received]:", volunteerData);

    return NextResponse.json({
      success: true,
      message: "Thank you for volunteering with JSWS. We will get in touch with you soon.",
    });
  } catch (error: any) {
    console.error("[JSWS Volunteer API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to process volunteer application. Please try again later.",
      },
      { status: 500 }
    );
  }
}
