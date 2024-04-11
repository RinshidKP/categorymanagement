import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const SubcategoryList = () => {
    const location = useLocation();
    const category = location.state.category;
    console.log(category)
    const [subcategories, setSubcategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://world.openfoodfacts.org/categories/${category}.json`);
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);
            setSubcategories(data.categories);
          } catch (error) {
            console.error('Error fetching subcategories:', error);
          }
        };
      
        if (category) {
          fetchData();
        }
      }, [category]);
      
      

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">{category} Subcategories</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subcategories.map(subcategory => (
          <li key={subcategory} className="border rounded p-4">
            <Link
              to={`/products?category=${category}&subcategory=${subcategory}`}
              className="text-blue-500 hover:underline"
            >
              {subcategory}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubcategoryList;
