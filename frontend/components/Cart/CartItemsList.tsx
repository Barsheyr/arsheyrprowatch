import { WatchSubset } from "@/models/watch";
import ThirdColumn from "./ThirdColumn"; // Ensure the correct import for ThirdColumn
import { Card } from "@/components/ui/card";
import { FirstColumn, SecondColumn, FourthColumn } from "./CartItemCoulmn";

interface CartItemsListProps {
  cartItems: WatchSubset[];
  removeItem: (id: string) => void; // Accept removeItem prop
}

const CartItemsList: React.FC<CartItemsListProps> = ({
  cartItems,
  removeItem,
}) => {
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { _id, name, price, quantity, images } = cartItem;
        const imageUrl =
          images.length > 0 ? images[0].url : "/default-image.jpg"; // Use default image if missing

        return (
          <Card
            key={_id}
            className="flex flex-col gap-y-4 md:flex-row flex-wrap p-6 mb-8 gap-x-4"
          >
            <FirstColumn image={imageUrl} name={name} />
            <SecondColumn
              name={name}
              company=""
              productId={_id}
              slug={name.toLowerCase().replace(/\s+/g, "-")}
            />
            <ThirdColumn
              id={_id}
              quantity={quantity}
              updateQuantity={() => {}}
              removeItem={removeItem}
            />
            <FourthColumn price={price * quantity} />
          </Card>
        );
      })}
    </div>
  );
};

export default CartItemsList;
