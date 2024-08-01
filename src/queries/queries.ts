import groq from "groq";

export const PRODUCTS_QUERY = groq`
  *[_type == "product" && productType == $productType] {
    "slug": slug.current,
    title,
    sizes,
    price,
    description,
    productType,
    tags,
    "images": images[].asset->url,
    "mainImageUrl": mainImage.asset->url,
    colors[]{
        name,
        image
    }
}
`;
