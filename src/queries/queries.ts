import groq from "groq";

// LOOK: Queries using GROQ for fetching Sanity content

export const PRODUCTS_QUERY = groq`
  *[_type == "product" && productType == $productType] {
    "slug": slug.current,
    title,
    body,
    details,
    fit,
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
