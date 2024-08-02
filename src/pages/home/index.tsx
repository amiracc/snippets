// @ts-nocheck

import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import client from "../../client";

import { Product } from "../../interfaces/interfaces";

import {
  StageArea,
  InfoArea,
  DetailsArea,
  ProductDetailsPageTemplate,
  CrossStyleArea,
  ProductScroller,
} from "../../components";
import { PRODUCTS_QUERY } from "../../queries/queries";

const Home = () => {
  const [product, setProduct] = useState<Product>(null);
  const [crossProducts, setCrossProducts] = useState<Product[] | []>([]);
  const [recommendProducts, setRecommendProducts] = useState<Product[] | []>(
    []
  );

  useEffect(() => {
    client
      .fetch(`${PRODUCTS_QUERY} | order(_createdAt asc)[0]`, {
        productType: "main",
      })
      .then((value: any) => setProduct(value));

    client
      .fetch(PRODUCTS_QUERY, {
        productType: "cross",
      })
      .then((value: any) => setCrossProducts(value));

    client
      .fetch(PRODUCTS_QUERY, {
        productType: "recommend",
      })
      .then((value: any) => setRecommendProducts(value));
  }, []);

  console.log("product?.fit", product?.fit);
  // LOOK: Using a template grid in order to structure my areas on the page. Alternative would have been
  // to have it defined in Sanity, but at that moment we were using CoreMedia and that's not fun due to Java ;).
  return (
    <Box
      className="sf-product-detail-page"
      layerStyle="page"
      data-testid="product-details-page"
    >
      <ProductDetailsPageTemplate
        areas={{
          stage: <StageArea product={product} />,
          info: <InfoArea product={product} />,
          details: <DetailsArea product={product} />,
          crossStyle: (
            <CrossStyleArea products={crossProducts} product={product} />
          ),
          recommend: <ProductScroller products={recommendProducts} />,
        }}
      />
    </Box>
  );
};

export default Home;
