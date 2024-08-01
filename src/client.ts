import { createClient } from "@sanity/client";

export default createClient({
  projectId: "jc4lcfq1",
  dataset: "production",
  useCdn: false,
  apiVersion: `2024-06-05`,
  resultSourceMap: true,
  perspective: "published",
});
