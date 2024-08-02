import { TypedObject } from "@portabletext/types";

export interface SingleProduct {
  product: Product;
}

export interface Color {
  name: string;
  image: string;
}

export interface Size {
  size: string;
  quantity: number;
}

export interface Product {
  colors: Color[];
  description: string;
  details: TypedObject;
  fit: TypedObject;
  images?: string[];
  mainImageUrl: string;
  price: string;
  productType: string;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
}
