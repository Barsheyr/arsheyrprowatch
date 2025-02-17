import { Watch } from "@/models/watch"; // Ensure this path is correct
import { Card, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// import FormContainer from "../form/FormContainer";
// import { SubmitButton } from "../form/Buttons";

// Define the props type for CartTotals
interface CartTotalsProps {
  cartItems: Watch[];
}

const CartTotals = ({ cartItems }: CartTotalsProps) => {
  // Calculate cart total based on cartItems
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Card className="p-8">
        <h3 className="text-3xl font-bold">Total Amount</h3>
        <p className="mt-5 font-semibold">${totalAmount.toFixed(2)}</p>
      </Card>
    </div>
  );
};

// CartTotalRow is a reusable component to display each row of total

export default CartTotals;
