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
    <div className="border border-gray-100 rounded-lg mb-4 relative overflow-hidden group transition">
      <Link
        href={`categories/${slug}`}
        className="border border-red-100 flex justify-center p-10"
      >
        <Image
          src={categoryImage}
          alt={categoryName}
          width={200}
          height={200}
          className=" group-hover:scale-110 transition duration-300"
        />
        <h3 className="">{categoryName}</h3>
        {/* <Image src=" alt="view" width={20} height={20} /> */}
      </Link>
    </div>
  );
};

export default WatchCategoryCard;
