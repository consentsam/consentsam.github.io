import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { getPosts } from "@/libs/getPosts";
import { getAuthors } from "@/libs/getAuthors";
import Slug from "./[slug]";

export default Slug;

export async function getStaticProps() {
  const fileContents = fs.readFileSync(join("content/pages", "home.md"), "utf-8");

  const { data: frontMatter } = matter(fileContents);

  return {
    props: {
      frontMatter,
      posts: getPosts(),
      authors: getAuthors(),
    },
  };
}