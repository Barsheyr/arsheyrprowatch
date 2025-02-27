import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

interface WatchCardProps {
  watchName: string;
  imageUrl: any;
  slug: string;
  price: number;
}

const WatchCard: FC<WatchCardProps> = (props) => {
  const { watchName, imageUrl, slug, price } = props;

  return (
    <Link href={`/watches/${slug}`}>
      <div className="border border-gray-100 bg-gray-100 rounded-lg h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="mx-auto flex justify-center items-center">
          <Image
            src={imageUrl}
            alt={watchName}
            width={200}
            height={200}
            className=" group-hover:scale-110 transition duration-300 mt-10"
          />
        </div>

        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 shadow-sm  flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all">
          <button>
            <div className="flex justify-center items-center text-white bg-blue-500 w-12 h-12 rounded-t-md">
              <FiShoppingCart className="text-3xl" />
            </div>
            <div className="w-12 h-12 bg-red-500 flex justify-center items-center rounded-b-md">
              <FaHeart color="white" />
            </div>
          </button>
        </div>
      </div>

      <div className="text-center">
        <div className="font-semibold text-2xl">{watchName}</div>

        <h3>{price} $</h3>
      </div>
    </Link>
  );
};

export default WatchCard;
