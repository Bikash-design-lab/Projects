import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../Components/Common/Loader";

const ProductDetails = () => {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const { userID } = useParams();

  useEffect(() => {
    setLoading(true);
    try {
      setLoading(false);
      fetch(`https://dummyjson.com/products/${userID}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    } catch (error) {
      console.log("Error ", error);
      setLoading(false);
    }
    setLoading(false);
  }, [userID]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-4">
      <button className="flex items-center justify-start bg-blue-800 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-700 transition">
        <Link to="/Products">Go Back</Link>
      </button>

      <h1 className="text-2xl font-bold text-gray-800 mb-1">{product.title}</h1>
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center border border-gray-300 rounded-lg shadow-lg p-4">
        <div className="w-full flex justify-center">
          <img
            className="rounded-lg max-w-xs"
            src={product.images?.[0]}
            alt={product.title}
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <p className="text-gray-600 text-sm mb-1">
            <strong>Status</strong>: {product.availabilityStatus}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Stock</strong>: {product.stock}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Brand</strong>: {product.brand}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Description</strong>: {product.description}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Price</strong>: ${product.price}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Discount</strong>: {product.discountPercentage}%
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Min Order</strong>: {product.minimumOrderQuantity}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Rating</strong>: {product.rating}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Return Policy</strong>: {product.returnPolicy}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Weight</strong>: {product.weight} gm (light-weight)
          </p>
          <button className="w-full bg-blue-800 text-white text-sm px-3 py-1 rounded-lg hover:bg-blue-700 transition">
            <Link to={`/${userID}/AddToCart`}>Add to Cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
