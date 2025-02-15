"use client";

import { CategoryContext } from "@/context/CategoryContext";
import React, { useContext } from "react";

interface CategoryButtonProps {
  cat: any;
}

const categoryButton = ({ cat }: CategoryButtonProps) => {
  const { category, changeCategory } = useContext(CategoryContext);
  return (
    <button
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mr-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
      onClick={() => changeCategory(cat.title)}
    >
      <span onClick={() => changeCategory(cat.title)} className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
        {cat.title}
      </span>
    </button>
  );
};

export default categoryButton;
