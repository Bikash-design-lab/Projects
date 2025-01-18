import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Components/Common/Loader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saveProducts, setSaveProducts] = useState({});
  const [sortOrder, setSortOrder] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
        const json = await response.json();
        setProducts(json.products);
        console.log(json.products);
        setLoading(false);
      } catch (error) {
        console.log("Error while fetching API data: ", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleSave = (id) => {
    setSaveProducts((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  console.log(sortOrder);
  const sortedProducts = products.sort((a, b) => {
    if (sortOrder === "h2l") {
      return b.price - a.price;
    } else if (sortOrder === "l2h") {
      return a.price - b.price;
    } else if (sortOrder === "All") {
      return products;
    }
  });
  return (
    <>
      <div className=" flex justify-start items-center mx-4">
        <p className="text-sm text-gray-700 my-4">
          <b>Showing {products.length} products</b>
        </p>
        <select className="border-2 ml-2" onChange={handleSortChange}>
          <option value="All">sort-by</option>
          <option value="l2h"> ₹ : Low-2-high</option>
          <option value="h2l"> ₹ : high-2-low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4">
        {sortedProducts.map((prod) => (
          <div
            className="relative bg-white border rounded-lg shadow-md p-4"
            key={prod.id}
          >
            <button
              className="absolute top-2 left-2 border-2 border-blue-600 px-1 bg-white rounded text-sm  hover:bg-blue-700 transition hover:text-white"
              onClick={() => toggleSave(prod.id)}
            >
              {saveProducts[prod.id] ? "Save" : "Unsave"}
            </button>
            <span className="absolute top-2 right-2 text-sm bg-red-500 text-white py-1 px-2 rounded-md">
              {prod.discountPercentage}%
            </span>
            <img
              className="w-full h-48 object-cover rounded-t-lg"
              src={prod.images[0]}
              alt={prod.title}
            />
            <div className="mt-2">
              <h2 className="text-lg font-bold text-gray-800">{prod.title}</h2>
              <p className="text-sm text-gray-600">
                <b className="text-green-600"> {prod.availabilityStatus} </b>
                {prod.stock} <b>|</b> <b>price</b> : ₹ {prod.price}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Brand</strong> : {prod.brand}
              </p>
              <div className="mt-4">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                  <Link to={`/Products/${prod.id}`}>More Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
