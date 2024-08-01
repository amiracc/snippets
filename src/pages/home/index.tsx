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

  // Left the data-testid here and in other few places in to highligh that normally we would include tracking.
  // Also normally here would be all the functionality and translations handled as well
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
          details: <DetailsArea />,
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
