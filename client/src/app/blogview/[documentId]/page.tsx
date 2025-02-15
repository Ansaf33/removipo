import { fetchBlogById } from "@/utils/fetcher";
import React from "react";
import ReactMarkdown from "react-markdown";

interface PageProps {
  params: {
    documentId: string;
  };
}

const page = async ({ params }: PageProps) => {
  const specificBlog = await fetchBlogById(params.documentId);
  console.log(specificBlog);

  return (
    <section className="bg-white dark:bg-gray-900 p-10">
      <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {specificBlog.data.title}
        </h2>
        <ReactMarkdown className="prose prose-lg dark:prose-invert">
          {specificBlog.data.content}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default page;
