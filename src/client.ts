import { createClient } from "@sanity/client";
const { SANITY_TOKEN } = process.env;

export default createClient({
  projectId: "jc4lcfq1",
  dataset: "production",
  useCdn: false,
  apiVersion: `2024-08-01`,
  resultSourceMap: true,
  perspective: "published",
  token: SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});
