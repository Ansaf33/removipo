"use client";

import React, { useContext, useLayoutEffect } from "react";
import CategoryButton from "./categoryButton";
import { CategoryContext } from "@/context/CategoryContext";

interface CategoriesProps {
  categories: any;
}

const categories = ({ categories }: CategoriesProps) => {
  const { category, changeCategory } = useContext(CategoryContext);

  useLayoutEffect(() => {
    changeCategory(categories.data[2].title);
  }, []);

  return (
    <div className="flex flex-wrap justify-center mb-7">
      {categories?.data?.map((category: any) => (
        <div key={category.id}>
          <CategoryButton cat={category} />
        </div>
      ))}
    </div>
  );
};

export default categories;
