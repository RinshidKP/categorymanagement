import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate()

  const handleClick =(category)=>{
    navigate('/categories', { state: { category } });
  }
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data); // Print out the API response for inspection
        if (data.categories) {
          const categoryNames = data.categories.map(category => category.strCategory);
          setCategories(categoryNames);
        } else {
          console.error('Error fetching categories: Invalid data structure');
        }
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(category => (
          <div key={category} className="bg-white rounded-lg shadow-md">
            <div onClick={()=>handleClick(category)} className="block p-4 hover:bg-gray-100">
              <span className="text-blue-500 hover:underline">{category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
