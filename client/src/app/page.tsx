import Bloglist from "@/components/blogs/bloglist";
import Categories from "@/components/categories";
import { fetchCategories, fetchBlogs } from "@/utils/fetcher";
import Image from "next/image";

export default async function Home() {
  const categories = await fetchCategories();
  const blogs = await fetchBlogs();

  return (
    <div>
      <Categories categories={categories} />
      <Bloglist blogs={blogs} />
    </div>
  );
}
