import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
const CategoryLists = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      let url = `http://localhost:8080/api/categories`;

      const res = await fetch(url);
      const data = await res.json();
      setCategories(data.object);
    }

    fetchCategories();
    // fetch("http://localhost:8080/api/categories")
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("No data Is coming");
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setCategories(data.object);
    //   });
  }),
    [];
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div>
          <h2 className="text-2xl text-blue-500">Category</h2>
          <div>
            {categories.map((cat) => (
              <ul key={cat.id}>
                <li>{cat.id}</li>
                <li>{cat.nameKh}</li>
                <li>{cat.nameEn}</li>
                <li>-----------------</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryLists;
