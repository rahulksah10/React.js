import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const News = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const json = await res.json();
      setData(json.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      {data.map((item) => (
        <div className="col-md-4 mb-4" key={item.id}>
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  );
};

export default News;
