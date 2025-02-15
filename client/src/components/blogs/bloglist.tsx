"use client";

import React, { useContext } from "react";
import Blog from "./blog";
import { CategoryContext } from "@/context/CategoryContext";

interface BloglistProps {
  blogs: any;
}

const bloglist = ({ blogs }: BloglistProps) => {
  const { category } = useContext(CategoryContext);

  const filteredBlogs = blogs.data.filter((blog: any) => {
    return blog.categories.some((cat: any) => cat.title === category);
  });

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredBlogs.map((blog: any) => (
        <div key={blog.id}>
          <Blog blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default bloglist;
