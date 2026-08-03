import { NextResponse } from "next/server";
import { OFFICIAL_JSWS_BANK_DETAILS } from "@/lib/payment-gateway";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format");

  if (format === "download") {
    const textContent = `================================================
JAMILA SULTAN WELFARE SOCIETY (JSWS)
OFFICIAL BANK DONATION DETAILS
================================================

Account Name : ${OFFICIAL_JSWS_BANK_DETAILS.accountName}
Bank Name    : ${OFFICIAL_JSWS_BANK_DETAILS.bankName}
IBAN No.     : ${OFFICIAL_JSWS_BANK_DETAILS.iban}
SWIFT Code   : ${OFFICIAL_JSWS_BANK_DETAILS.swiftCode}

------------------------------------------------
Security Note:
100% of your donations support healthcare, medicines, 
education, and welfare initiatives for deserving patients.

Secure Donation • Official JSWS Bank Account
================================================`;

    return new NextResponse(textContent, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": 'attachment; filename="JSWS_BankIslami_Details.txt"',
      },
    });
  }

  return NextResponse.json({
    success: true,
    bankDetails: OFFICIAL_JSWS_BANK_DETAILS,
  });
}
