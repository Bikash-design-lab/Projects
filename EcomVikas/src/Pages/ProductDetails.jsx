import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Loader from "../Components/Common/Loader";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { userID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${userID}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [userID]);

  const handleAddToCart = () => {
    alert("Product added to cart!");
    navigate("/Products");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  if (!product) {
    return <div className="text-center">Product not found.</div>;
  }

  return (
    <div className="p-4 mx-4">
      <button className="flex items-center justify-start bg-blue-800 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-700 transition">
        <Link to="/Products">Go Back</Link>
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-1 text-center">
        {product.title}
      </h1>
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
            <strong>Status</strong>: {product.availabilityStatus || "N/A"}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Stock</strong>: {product.stock || "N/A"}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Brand</strong>: {product.brand || "N/A"}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Description</strong>: {product.description || "N/A"}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Price</strong>: ${product.price || "N/A"}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Discount</strong>: {product.discountPercentage || "N/A"}%
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Min Order</strong>: {product.minimumOrderQuantity || "N/A"}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Rating</strong>: {product.rating || "N/A"}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Return Policy</strong>: {product.returnPolicy || "N/A"}
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Weight</strong>: {product.weight || "N/A"} gm (light-weight)
          </p>
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-800 text-white text-sm px-3 py-1 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
