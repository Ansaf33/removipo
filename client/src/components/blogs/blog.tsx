"use client";

import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

interface BlogProps {
  blog: any;
}

const blog = ({ blog }: BlogProps) => {
  const truncatedBlogContent =
    blog.content.length > 20
      ? blog.content.substring(0, 20) + "..."
      : blog.content;
  const truncatedBlogTitle =
    blog.title.length > 20 ? blog.title.substring(0, 20) + "..." : blog.title;

  console.log("Truncated equals : " + truncatedBlogContent);

  const imgURL = "http://localhost:1337" + blog.image.url;

  return (
    <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-transform">
      <div className="w-52 h-40 bg-sky-300 rounded-2xl flex justify-center">
        <img src={imgURL}></img>
      </div>
      <div className="">
        <ReactMarkdown className="font-extrabold">
          {truncatedBlogTitle}
        </ReactMarkdown>
        <ReactMarkdown className="prose prose-lg dark:prose-invert">
          {truncatedBlogContent}
        </ReactMarkdown>
      </div>
      <Link
        href={`/blogview/${blog.documentId}`}
        className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors"
      >
        See more
      </Link>
    </div>
  );
};

export default blog;
