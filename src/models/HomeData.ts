export interface ProductsData {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: [];
  thumbnail: string | undefined;
  posts: [],
  body:string
}

export interface HomeData extends ProductsData {
  products: Array<HomeData>;
}
