// "use client";

// import { useEffect, useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { getWatch } from "../../lib/api";
// import CarouselSlider from "@/components/CarouselSlider/CarouselSlider";
// import { Watch } from "../../models/watch";
// import { useAppDispatch } from "../../hooks/storeHooks";
// import { addItemToCart } from "@/redux/features/cartSlice";
// import { toast } from "react-hot-toast"; // Import toast from react-hot-toast

// const WatchDetailsClient = (props: {
//   slug: string;
//   children: React.ReactNode;
// }) => {
//   const { slug, children } = props;

//   const [quantity, setQuantity] = useState(0);
//   const [price, setPrice] = useState(0);
//   const [watchDetails, setWatchDetails] = useState<Watch>();
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     const fetchGameDetails = async () => {
//       const watch = await getWatch(slug);
//       setWatchDetails(watch);
//     };

//     fetchGameDetails();
//   }, [slug]);

//   const handleDecrease = () => {
//     if (!watchDetails) return;
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//       setPrice(Number(((quantity - 1) * watchDetails.price).toFixed(2)));
//     }
//   };

//   const handleIncrease = () => {
//     if (!watchDetails) return;
//     if (quantity < watchDetails.quantity) {
//       setQuantity(quantity + 1);
//       setPrice(Number(((quantity + 1) * watchDetails.price).toFixed(2)));
//     }
//   };

//   const handleAddToCart = () => {
//     if (!watchDetails) return;
//     dispatch(addItemToCart({ ...watchDetails, quantity }));

//     // Show a toast message that the item has been added to the cart
//     toast.success(`${watchDetails.name} added to cart!`, {
//       position: "top-right",
//     });
//   };

//   return (
//     <div>
//       {watchDetails && <CarouselSlider images={watchDetails.images} />}

//       <div className="py-10 max-w-xs md:max-w-3xl mx-auto flex flex-col items-center justify-center">
//         <div className="text-center">
//           <div className="flex justify-center items-center space-x-4">
//             <button
//               onClick={handleDecrease}
//               className={`${"px-4 py-2 rounded bg-blue-500 text-white"} ${
//                 quantity === 0 && "bg-gray-300 cursor-not-allowed"
//               }`}
//               disabled={quantity === 0}
//             >
//               -
//             </button>
//             <input
//               type="text"
//               className="border outline-none border-gray-300 rounded px-2 py-1 text-center w-12"
//               value={quantity}
//               readOnly
//             />
//             {watchDetails && (
//               <button
//                 onClick={handleIncrease}
//                 className={`${"px-4 py-2 rounded bg-blue-500 text-white"} ${
//                   quantity === watchDetails.quantity &&
//                   "bg-gray-300 cursor-not-allowed"
//                 }`}
//                 disabled={quantity === watchDetails.quantity}
//               >
//                 +
//               </button>
//             )}
//             <div className="text-xl text-primary-light"> $ {price} </div>
//             <button
//               onClick={handleAddToCart}
//               className={`${"px-4 py-2 rounded bg-blue-500 text-white"} ${
//                 quantity === 0 && "bg-gray-300 cursor-not-allowed"
//               }`}
//               disabled={quantity === 0}
//             >
//               <FaShoppingCart />
//             </button>
//           </div>

//           {/* Render Game Details Server */}
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WatchDetailsClient;

"use client";

import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { getWatch } from "../../lib/api";
import CarouselSlider from "@/components/CarouselSlider/CarouselSlider";
import { Watch } from "../../models/watch";
import { useAppDispatch } from "../../hooks/storeHooks";
import { addItemToCart } from "@/redux/features/cartSlice";
import { toast } from "react-hot-toast";
import { useUser, SignInButton } from "@clerk/nextjs"; // Import Clerk auth hooks

const WatchDetailsClient = (props: {
  slug: string;
  children: React.ReactNode;
}) => {
  const { slug, children } = props;
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [watchDetails, setWatchDetails] = useState<Watch>();
  const dispatch = useAppDispatch();
  const { isSignedIn } = useUser(); // Get user authentication status

  useEffect(() => {
    const fetchWatchDetails = async () => {
      const watch = await getWatch(slug);
      setWatchDetails(watch);
    };

    fetchWatchDetails();
  }, [slug]);

  const handleDecrease = () => {
    if (!watchDetails) return;
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setPrice(Number(((quantity - 1) * watchDetails.price).toFixed(2)));
    }
  };

  const handleIncrease = () => {
    if (!watchDetails) return;
    if (quantity < watchDetails.quantity) {
      setQuantity(quantity + 1);
      setPrice(Number(((quantity + 1) * watchDetails.price).toFixed(2)));
    }
  };

  const handleAddToCart = () => {
    if (!watchDetails) return;
    dispatch(addItemToCart({ ...watchDetails, quantity }));
    toast.success(`${watchDetails.name} added to cart!`, {
      position: "top-right",
    });
  };

  return (
    <div>
      {watchDetails && <CarouselSlider images={watchDetails.images} />}

      <div className="py-10 max-w-xs md:max-w-3xl mx-auto flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={handleDecrease}
              className={`px-4 py-2 rounded bg-blue-500 text-white ${
                quantity === 0 && "bg-gray-300 cursor-not-allowed"
              }`}
              disabled={quantity === 0}
            >
              -
            </button>
            <input
              type="text"
              className="border outline-none border-gray-300 rounded px-2 py-1 text-center w-12"
              value={quantity}
              readOnly
            />
            {watchDetails && (
              <button
                onClick={handleIncrease}
                className={`px-4 py-2 rounded bg-blue-500 text-white ${
                  quantity === watchDetails.quantity &&
                  "bg-gray-300 cursor-not-allowed"
                }`}
                disabled={quantity === watchDetails.quantity}
              >
                +
              </button>
            )}
            <div className="text-xl text-primary-light"> $ {price} </div>

            {/* Conditionally render the button based on auth status */}
            {isSignedIn ? (
              <button
                onClick={handleAddToCart}
                className={`px-4 py-2 rounded bg-blue-500 text-white ${
                  quantity === 0 && "bg-gray-300 cursor-not-allowed"
                }`}
                disabled={quantity === 0}
              >
                <FaShoppingCart />
              </button>
            ) : (
              <SignInButton>
                <button className="px-4 py-2 rounded bg-red-500 text-white">
                  Please Sign In
                </button>
              </SignInButton>
            )}
          </div>

          {/* Render Watch Details Server */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default WatchDetailsClient;
