/**
 * JSWS NGO Payment Gateway Infrastructure
 * Flexible architecture for future gateway integrations (PayFast, Safepay, PayPro, Raast Direct, etc.)
 */

export type PaymentMethodType = 
  | 'bank_transfer'
  | 'debit_credit_card'
  | 'raast'
  | 'google_pay'
  | 'apple_pay'
  | 'mobile_wallet';

export type PaymentGatewayProvider = 'bank_islami_direct' | 'payfast' | 'safepay' | 'paypro' | 'stripe';

export interface BankAccountDetails {
  accountName: string;
  bankName: string;
  iban: string;
  swiftCode: string;
  accountType: string;
  branchName?: string;
  qrCodeUrl?: string;
}

export interface PaymentIntentPayload {
  amount: number;
  currency: string;
  cause: string;
  donorName?: string;
  donorEmail?: string;
  donorPhone?: string;
  paymentMethod: PaymentMethodType;
}

export interface PaymentResponse {
  success: boolean;
  transactionId?: string;
  status: 'completed' | 'pending' | 'failed' | 'requires_action';
  gatewayUrl?: string;
  message: string;
}

export const OFFICIAL_JSWS_BANK_DETAILS: BankAccountDetails = {
  accountName: "JAMILA SULTAN WELFARE SOCIETY",
  bankName: "BankIslami Pakistan Ltd.",
  iban: "PK62BKIP0103600357930001",
  swiftCode: "BKIPPKKA",
  accountType: "NGO Welfare Current Account",
  branchName: "Karachi Branch",
};

/**
 * Interface for Payment Gateway Drivers
 */
export interface PaymentGatewayDriver {
  providerName: PaymentGatewayProvider;
  isAvailable(): boolean;
  createPaymentIntent(payload: PaymentIntentPayload): Promise<PaymentResponse>;
  verifyPayment(transactionId: string): Promise<PaymentResponse>;
}

/**
 * Placeholder Payment Driver for Direct Bank Transfer
 */
export class DirectBankTransferDriver implements PaymentGatewayDriver {
  providerName: PaymentGatewayProvider = 'bank_islami_direct';

  isAvailable(): boolean {
    return true;
  }

  async createPaymentIntent(payload: PaymentIntentPayload): Promise<PaymentResponse> {
    return {
      success: true,
      status: 'pending',
      message: `Please transfer ${payload.amount} ${payload.currency} to our official BankIslami account and share your receipt.`,
    };
  }

  async verifyPayment(transactionId: string): Promise<PaymentResponse> {
    return {
      success: true,
      transactionId,
      status: 'completed',
      message: 'Bank transfer verified.',
    };
  }
}
