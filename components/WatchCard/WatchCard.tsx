import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsEyeFill, BsPlus } from "react-icons/bs";

// import watchCardClassNames from "./watchCardClassName";

interface WatchCardProps {
  watchName: string;
  imageUrl: string;
  slug: string;
  price: number;
}

const WatchCard: FC<WatchCardProps> = (props) => {
  const { watchName, imageUrl, slug, price } = props;

  return (
    <Link href={`/watches/${slug}`}>
      <h3>{price} $</h3>

      {/* <div className="w-[200px] mx-auto flex justify-center items-center"> */}
      <div className="border border-gray-200 h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-[200px] mx-auto flex justify-center items-center">
          <Image
            src={imageUrl}
            alt={watchName}
            width={500}
            height={1000}
            className=" group-hover:scale-110 transition duration-300"
          />
        </div>

        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 shadow-sm  flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all">
          <button>
            <div className="flex justify-center items-center text-white bg-red-500 w-12 h-12">
              <BsPlus className="text-3xl" />
            </div>
            <div className="w-12 h-12 bg-gray-100 flex justify-center items-center">
              <BsEyeFill />
            </div>
          </button>

          {/* <Link
          to={`/product/${id}`}
          className="w-12 h-12 bg-gray-100 flex justify-center items-center"
        >
          <BsEyeFill />
        </Link> */}
        </div>
      </div>

      <div>{watchName}</div>
    </Link>
  );
};

export default WatchCard;
