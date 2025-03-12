"use client";

import { useAppSelector } from "@/hooks/storeHooks";
import { useUser } from "@clerk/nextjs";
import { loadPaystackScript } from "@/hooks/usePaystack";

const PaystackPayment = () => {
  const { user } = useUser();
  const { cartItems } = useAppSelector((state) => state.cart);

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";
  const email = user?.primaryEmailAddress?.emailAddress || "";

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const paymentData = {
    amount: totalAmount * 100, // Convert to kobo
    email,
    currency: "NGN",
    reference: `txn-${Date.now()}`, // Unique reference
  };

  const handlePayment = () => {
    loadPaystackScript(() => {
      const handler = (window as any).PaystackPop.setup({
        key: publicKey,
        email: paymentData.email,
        amount: paymentData.amount,
        currency: paymentData.currency,
        reference: paymentData.reference,
        callback: (response: any) => {
          console.log("Payment Successful:", response);
          // Handle order completion, redirect user, or show a success message
        },
        onClose: () => {
          console.log("Payment closed by user.");
        },
      });

      handler.openIframe();
    });
  };

  return (
    <button
      className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded"
      onClick={handlePayment}
    >
      Pay with Paystack
    </button>
  );
};

export default PaystackPayment;
