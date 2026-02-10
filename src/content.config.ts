import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/resources/lmg" }),
});

export const collections = { blog };
