export type TCart = {
  id: number;
  userId: number;
  date: Date;
  products: TCartProduct[];
};
export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export type TCartProduct = {
  productId: number;
  quantity: number;
};
