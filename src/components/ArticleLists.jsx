import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
function Articles() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/articles")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setArticles(data.object); // Assuming the response is directly the array of articles
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div>
          <h2 className="text-2xl text-blue-500">Articles</h2>
          <div>
            {articles.map((article) => (
              <ul key={article.id}>
                <li>ID: {article.id}</li>
                <li>Name: {article.name}</li>
                <li>Category ID: {article.category.id}</li>
                <li>Category Name (Khmer): {article.category.nameKh}</li>
                <li>Category Name (English): {article.category.nameEn}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
