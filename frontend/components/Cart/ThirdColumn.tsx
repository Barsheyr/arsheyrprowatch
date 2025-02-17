"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "../../hooks/use-toast";

function ThirdColumn({
  quantity,
  id,
  updateQuantity,
}: {
  quantity: number;
  id: string;
  updateQuantity: (id: string, newQuantity: number) => void;
}) {
  const [amount, setAmount] = useState(quantity);
  const { toast } = useToast();

  const handleAmountChange = (newAmount: number) => {
    if (newAmount < 1) return; // Prevent negative quantities

    setAmount(newAmount);
    updateQuantity(id, newAmount);

    toast({
      description: `Quantity updated to ${newAmount}`,
      variant: "default", // Optional, can be "destructive" or other variants
      duration: 2000, // Toast disappears after 2 seconds
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        variant="outline"
        onClick={() => handleAmountChange(amount - 1)}
        disabled={amount <= 1}
      >
        -
      </Button>
      <span className="text-lg font-medium">{amount}</span>
      <Button
        size="sm"
        variant="outline"
        onClick={() => handleAmountChange(amount + 1)}
      >
        +
      </Button>
    </div>
  );
}

export default ThirdColumn;
