import axios from "axios";
import React, { useState, useEffect } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        axios.get("http://localhost:4000/api/category").then((response) => {
          setCategories(response.data);
        });
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading categories: {error.message}</div>;
  }

  return (
    <div>
      <h1>Category List</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {categories.map((category) => (
          <li
            key={category._id}
            style={{
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: category.color,
                marginRight: "10px",
              }}
            ></div>
            <img
              src={category.images}
              alt={category.name}
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
