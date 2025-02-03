import { Category } from "@/models/category";
import sanityClient from "./sanity";
import { Watch, WatchSubset } from "../models/watch";

export const getCategories = async (): Promise<Category[]> => {
  const query = `*[_type == "category"] {
          _id,
          name,
          slug {current},
          image, 
          subtitle
      }`;

  const categories: Category[] = await sanityClient.fetch({ query });

  return categories;
};

export const getWatches = async (): Promise<Watch[]> => {
  const query = `*[_type == "watch"] {
        name,
        price,
        images,
        isFeatured,
        isTrending,
        'category': *[_id == ^.category._ref][0] {
          name,
          slug {
            current
          }
        },
        slug,
        quantity,
        description
      }`;

  const watches: Watch[] = await sanityClient.fetch({ query });

  return watches;
};
