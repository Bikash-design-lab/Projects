import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../Components/Common/Loader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error: ", error);
        setLoading(false);
      });
  }, []);

  const carouselImages = [
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/d521f284a0827057.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/56cb2ccc444c9596.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/59fc23cbcec79183.jpeg?q=20",
    "https://img.freepik.com/free-photo/portrait-beautiful-cute-happy-sweet-surprised-blonde-woman-girl-holding-her-hands-big-shopping-bag-hipster-red-clothes-isolated-white_158538-13476.jpg",
    "https://img.freepik.com/free-photo/woman-with-shopping-bags-studio-yellow-background-isolated_1303-14292.jpg",
    "https://img.freepik.com/premium-photo/indian-man-traditional-wear-kurta-pyjama-cloths-male-fashion-model-sherwani-posing-standing-against-brown-grunge-background-selective-focus_466689-45391.jpg",
    "https://img.freepik.com/premium-photo/indian-man-traditional-wear-kurta-pyjama-cloths-male-fashion-model-sherwani-posing-standing-against-brown-grunge-background-selective-focus_466689-45379.jpg",
    "https://img.freepik.com/premium-photo/close-up-school-boy-having-fun_127093-2587.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselImages.length - 1 : prevSlide - 1
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-4">
      <div
        className="w-full h-96 bg-cover bg-center text-white text-center flex justify-center items-center"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/still-life-graphic-design-office_23-2151345424.jpg')`,
        }}
      >
        <div>
          <h1 className="text-4xl font-bold">
            Welcome to Our E-Commerce Store
          </h1>
          <p className="mt-4 text-lg italic">
            "Quality Products, Unbeatable Prices"
          </p>
          <Link
            to="/Products"
            className="mt-6 inline-block bg-yellow-500 text-black py-2 px-6 rounded-lg text-lg hover:bg-yellow-600 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gray-200 py-16 text-center">
        <p className="text-xl font-semibold text-gray-700">
          "Shopping is a journey, not a destination."
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Discover the best deals and find what suits you best!
        </p>
      </div>

      {/* Featured Image Section */}
      <div className="my-12">
        <div className="relative">
          <img
            className="w-full h-60 object-cover rounded-lg"
            src="https://cdn.shopify.com/s/files/1/0070/7032/articles/trending-products_7ed711c4-206c-4b41-a321-711785f3a917.png?v=1729280622&originalWidth=1848&originalHeight=782&width=1800&originalWidth=1848&originalHeight=782&width=1000"
            alt="Featured Products"
          />
          <div className="absolute top-1/2 left-0 right-0 text-center text-white">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="mt-2 text-lg">Curated Just For You</p>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Top Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((prod) => (
            <div
              className="relative bg-white border rounded-lg shadow-md p-4"
              key={prod.id}
            >
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={prod.images[0]}
                alt={prod.title}
              />
              <div className="mt-2">
                <h3 className="text-lg font-bold text-gray-800">
                  {prod.title}
                </h3>
                <p className="text-sm text-gray-600">
                  <b>Price:</b> ₹{prod.price}
                </p>
                <p className="text-sm text-gray-600">
                  <b>Discount:</b> {prod.discountPercentage}%
                </p>
                <Link
                  to={`/Products/${prod.id}`}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 block text-center hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Explore Our Gallery
        </h2>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <div key={index} className="min-w-full">
                <img
                  className="w-full h-96 object-cover rounded-lg"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
          >
            ›
          </button>
        </div>
      </div>

      <div className="my-16 bg-gray-100 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          What Our Customers Are Saying
        </h2>
        <div className="flex justify-center items-center gap-12">
          <div className="w-1/3 bg-white p-6 shadow-lg rounded-lg">
            <p className="italic text-gray-600">
              "Amazing quality and fast delivery! Will definitely shop again."
            </p>
            <p className="mt-4 font-semibold">- John Doe</p>
          </div>
          <div className="w-1/3 bg-white p-6 shadow-lg rounded-lg">
            <p className="italic text-gray-600">
              "I found everything I needed at unbeatable prices. Highly
              recommend!"
            </p>
            <p className="mt-4 font-semibold">- Sarah Lee</p>
          </div>
          <div className="w-1/3 bg-white p-6 shadow-lg rounded-lg">
            <p className="italic text-gray-600">
              "Great variety of products, and the customer service is
              exceptional."
            </p>
            <p className="mt-4 font-semibold">- Michael Smith</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Shop by Categories
        </h2>
        <div className="flex justify-around">
          <div className="text-center">
            <img
              className="w-24 h-24 object-cover rounded-full mx-auto"
              src="https://images.pexels.com/photos/1604024/pexels-photo-1604024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Elecronics"
            />

            <h3 className="mt-2 text-lg font-semibold">Electronics</h3>
            <Link
              to="/Products"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              Explore
            </Link>
          </div>
          <div className="text-center">
            <img
              className="w-24 h-24 object-cover rounded-full mx-auto"
              src="https://images.pexels.com/photos/5935748/pexels-photo-5935748.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Category 2"
            />
            <h3 className="mt-2 text-lg font-semibold">Clothing</h3>
            <Link
              to="/Products"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              Explore
            </Link>
          </div>
          <div className="text-center">
            <img
              className="w-24 h-24 object-cover rounded-full mx-auto"
              src="https://images.pexels.com/photos/313776/pexels-photo-313776.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Category 3"
            />
            <h3 className="mt-2 text-lg font-semibold">Furniture</h3>
            <Link
              to="/Products"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              Explore
            </Link>
          </div>

          <div className="text-center">
            <img
              className="w-24 h-24 object-cover rounded-full mx-auto"
              src="https://images.pexels.com/photos/1926988/pexels-photo-1926988.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Category 3"
            />
            <h3 className="mt-2 text-lg font-semibold">Books</h3>
            <Link
              to="/Products"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              Explore
            </Link>
          </div>

          <div className="text-center">
            <img
              className="w-24 h-24 object-cover rounded-full mx-auto"
              src="https://images.pexels.com/photos/3068579/pexels-photo-3068579.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Category 3"
            />
            <h3 className="mt-2 text-lg font-semibold">Toys</h3>
            <Link
              to="/Products"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              Explore
            </Link>
          </div>

          <div className="text-center">
            <img
              className="w-24 h-24 object-cover rounded-full mx-auto"
              src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Category 3"
            />
            <h3 className="mt-2 text-lg font-semibold">Grocery</h3>
            <Link
              to="/Products"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>

      <footer className="mt-20 bg-gray-800 text-white text-center py-6">
        <p className="text-sm">© 2025 E-Commerce Store. All rights reserved.</p>
        <div className="mt-4">
          <Link to="/About" className="text-white hover:underline mx-4">
            About Us
          </Link>
          <Link to="/Contact" className="text-white hover:underline mx-4">
            Contact Us
          </Link>
          <Link to="/Privacy" className="text-white hover:underline mx-4">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
