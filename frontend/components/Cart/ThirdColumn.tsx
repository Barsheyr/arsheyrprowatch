"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { useAppDispatch } from "../../hooks/storeHooks";
import {
  updateQuantity,
  removeItemFromCart,
} from "../../redux/features/cartSlice";
import { useToast } from "../../hooks/use-toast";

function ThirdColumn({ quantity, id }: { quantity: number; id: string }) {
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState(quantity);
  const { toast } = useToast();

  const handleAmountChange = (newAmount: number) => {
    if (newAmount < 1) return;

    setAmount(newAmount);
    dispatch(updateQuantity({ _id: id, quantity: newAmount }));

    toast({
      description: `Quantity updated to ${newAmount}`,
      variant: "default",
      duration: 2000,
    });
  };

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart({ _id: id }));
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
      <Button size="sm" variant="destructive" onClick={handleRemoveItem}>
        Remove
      </Button>
    </div>
  );
}

export default ThirdColumn;
