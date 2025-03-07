export interface Watch {
  _id: string;
  name: string;
  price: number;
  images: Array<{
    _key: string;
    url: string;
  }>;
  isFeatured: boolean;
  isTrending: boolean;
  category: { name: string; slug: { current: string } };
  slug: { current: string };
  quantity: number;
  description: string;
}

export type WatchSubset = Pick<
  Watch,
  "_id" | "price" | "quantity" | "images" | "name"
> & { maxQuantity: number };
