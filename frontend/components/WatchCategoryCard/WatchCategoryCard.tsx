import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface WatchCategoryCardProps {
  categoryImage: any;
  categoryName: string;
  slug: string;
}

const WatchCategoryCard: FC<WatchCategoryCardProps> = (props) => {
  const { categoryImage, categoryName, slug } = props;
  return (
    <div>
      <div className="border border-gray-100 bg-gray-100 h-[300px] rounded-lg mb-4 relative overflow-hidden group transition">
        <Link
          href={`brand/${slug}`}
          className="mx-auto flex flex-col justify-center items-center"
        >
          <Image
            src={categoryImage}
            alt={categoryName}
            width={200}
            height={200}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
        </Link>
      </div>

      <h3 className="font-bold text-2xl text-center">{categoryName}</h3>
    </div>
  );
};

export default WatchCategoryCard;
