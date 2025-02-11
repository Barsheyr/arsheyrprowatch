import { Brand } from "@/models/brand";
import sanityClient from "./sanity";
import { Watch, WatchSubset } from "../models/watch";

export const getBrands = async (): Promise<Brand[]> => {
  const query = `*[_type == "brand"] {
          _id,
          name,
          slug {current},
          image, 
          subtitle
      }`;

  const brands: Brand[] = await sanityClient.fetch({ query });

  return brands;
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

export const getBrandWatches = async (slug: string): Promise<Watch[]> => {
  const query = `*[_type == "watch" && brand->slug.current == "${slug}"] {
    name,
    price,
    images,
    isFeatured,
    isTrending,
    slug,
    quantity,
    description,
    category->{
      name,
      subtitle
    }
  }`;

  const watches: Watch[] = await sanityClient.fetch({ query });

  return watches;
};

export const getBrand = async (slug: string): Promise<Brand> => {
  const query = `*[_type == "brand" && slug.current == "${slug}"][0]`;

  const brand: Brand = await sanityClient.fetch({ query });

  return brand;
};

export const getWatch = async (slug: string): Promise<Watch> => {
  const query = `*[_type == "watch" && slug.current == "${slug}"][0] {
        _id,
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

  const watch: Watch = await sanityClient.fetch({ query });

  return watch;
};
