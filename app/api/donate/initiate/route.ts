import { NextResponse } from "next/server";

/**
 * Extensible API Endpoint for Future Online Payment Gateway Integration
 * 
 * Supports future drivers: PayFast, Safepay, PayPro, Raast Direct, Stripe
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, gateway = "bank_transfer" } = body;

    // Validate minimum donation amount
    if (!amount || Number(amount) <= 0) {
      return NextResponse.json(
        { success: false, error: "Invalid donation amount specified." },
        { status: 400 }
      );
    }

    // Official BankIslami Direct Account Details Return
    if (gateway === "bank_transfer") {
      return NextResponse.json({
        success: true,
        gateway: "bank_transfer",
        bankDetails: {
          accountName: "JAMILA SULTAN WELFARE SOCIETY",
          bankName: "BankIslami Pakistan Ltd.",
          iban: "PK62BKIP0103600357930001",
          swift: "BKIPPKKA",
          qrCodeUrl: "/bankislami-qr.svg"
        },
        message: "Direct bank transfer details fetched successfully."
      });
    }

    // Future Gateway Adapter Stubs (PayFast, Safepay, PayPro)
    return NextResponse.json({
      success: false,
      status: "coming_soon",
      gateway,
      message: `Online payment via ${gateway} is currently under integration. Please use Direct Bank Transfer (BankIslami).`,
      officialBank: {
        accountName: "JAMILA SULTAN WELFARE SOCIETY",
        bankName: "BankIslami Pakistan Ltd.",
        iban: "PK62BKIP0103600357930001",
        swift: "BKIPPKKA"
      }
    }, { status: 202 });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Failed to process donation request.";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
