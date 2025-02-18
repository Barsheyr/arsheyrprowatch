"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "../../hooks/use-toast";

function ThirdColumn({
  quantity,
  id,
  updateQuantity,
  removeItem,
}: {
  quantity: number;
  id: string;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeItem: (id: string) => void;
}) {
  const [amount, setAmount] = useState(quantity);
  const { toast } = useToast();

  // Handle quantity change
  const handleAmountChange = (newAmount: number) => {
    if (newAmount < 1) return;

    setAmount(newAmount);
    updateQuantity(id, newAmount);

    toast({
      description: `Quantity updated to ${newAmount}`,
      variant: "default",
      duration: 2000,
    });
  };

  // Handle removing the item from the cart
  const handleRemoveItem = () => {
    removeItem(id); // Call removeItem function passed from parent (CartPage)
    toast({
      description: `Item removed from cart`,
      variant: "destructive",
      duration: 2000,
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
      <Button
        size="sm"
        variant="destructive"
        onClick={handleRemoveItem} // Add the "Remove" button functionality
      >
        Remove
      </Button>
    </div>
  );
}

export default ThirdColumn;
