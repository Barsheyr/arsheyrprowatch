import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <div className=" rounded-lg h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="mx-auto flex justify-center items-center">
          <Image
            src={imageUrl}
            alt={watchName}
            width={200}
            height={200}
            className=" group-hover:scale-110 transition duration-300 mt-10"
          />
        </div>
      </div>

      <div className="text-center bg-slate-200 text-black rounded-2xl">
        <div className="font-semibold text-2xl">{watchName}</div>
        <h3>{price} $</h3>
      </div>
    </Link>
  );
};

export default WatchCard;
