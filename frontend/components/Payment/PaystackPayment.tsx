"use client";
import { useEffect, useState } from "react";
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

  const [reference, setReference] = useState("");

  useEffect(() => {
    setReference(`txn-${Date.now()}`); // Now set on the client only
  }, []);

  const paymentData = {
    amount: totalAmount * 100,
    email,
    currency: "NGN",
    reference, // Use the state variable
  };

  const handlePayment = () => {
    if (!reference) return; // Ensure reference is set

    loadPaystackScript(() => {
      const handler = (window as any).PaystackPop.setup({
        key: publicKey,
        email: paymentData.email,
        amount: paymentData.amount,
        currency: paymentData.currency,
        reference: paymentData.reference,
        callback: (response: any) => {
          console.log("Payment Successful:", response);
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
      disabled={!reference} // Prevent click until reference is ready
    >
      Pay with Paystack
    </button>
  );
};

export default PaystackPayment;
