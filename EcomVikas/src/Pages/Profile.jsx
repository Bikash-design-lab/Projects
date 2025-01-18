import React from "react";
import BikashProf from "../assets/BikashProf.jpg";

const Profile = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-orange-50 to-teal-50 shadow-lg rounded-lg">
      {/* Profile Header */}
      <div className="flex items-center space-x-6">
        <img
          className="w-28 h-28 rounded-full border-4 border-gray-200 shadow-lg"
          src={BikashProf}
          alt="Profile"
        />
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 hover:text-indigo-600 transition duration-300">
            Bikash Barmwal
          </h1>
          <p className="text-lg text-gray-600 italic">Store Manager</p>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Namaste! I'm Bikash Barmwal, the store manager at "Sanskriti Finds,"
          an Indian fashion and lifestyle store. I am passionate about
          showcasing the rich heritage and diversity of Indian culture through
          curated collections and exceptional customer service. I strive to
          provide a unique shopping experience for our customers.
        </p>
      </div>

      {/* Store Information */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Store Information
        </h2>
        <ul className="mt-4 text-gray-600 space-y-2">
          <li className="flex items-center">
            <span className="font-bold text-gray-800 mr-2">Email:</span>
            <a
              href="mailto:support@sanskritifinds.com"
              className="text-indigo-600 hover:underline"
            >
              support@sanskritifinds.com
            </a>
          </li>
          <li className="flex items-center">
            <span className="font-bold text-gray-800 mr-2">Phone:</span>
            <span>(+91) 98765 43210</span>
          </li>
          <li className="flex items-center">
            <span className="font-bold text-gray-800 mr-2">Location:</span>
            <span>123 MG Road, New Delhi, Delhi, India</span>
          </li>
          <li className="flex items-center">
            <span className="font-bold text-gray-800 mr-2">Store Hours:</span>
            <span>Mon-Sat, 10 AM - 8 PM</span>
          </li>
        </ul>
      </div>

      {/* Product Categories */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Product Categories
        </h2>
        <ul className="mt-4 text-gray-600 space-y-2">
          <li className="flex items-center">
            <span className="font-semibold text-indigo-600">•</span>
            <span className="ml-2">Women’s Ethnic Wear</span>
          </li>
          <li className="flex items-center">
            <span className="font-semibold text-indigo-600">•</span>
            <span className="ml-2">Men’s Traditional Wear</span>
          </li>
          <li className="flex items-center">
            <span className="font-semibold text-indigo-600">•</span>
            <span className="ml-2">Handcrafted Accessories</span>
          </li>
          <li className="flex items-center">
            <span className="font-semibold text-indigo-600">•</span>
            <span className="ml-2">Home Décor & Furnishings</span>
          </li>
        </ul>
      </div>

      {/* Customer Reviews Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Customer Reviews
        </h2>
        <div className="mt-4 space-y-2 text-gray-600">
          <p className="italic">
            "Quality products with a touch of Indian tradition. Fast delivery.
            Highly recommend!"
          </p>
          <p className="text-right font-semibold text-gray-800">- Priya S.</p>
          <p className="italic">
            "Loved the experience! The store captures the essence of Indian
            culture. Beautiful items."
          </p>
          <p className="text-right font-semibold text-gray-800">- Ravi P.</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Follow Us</h2>
        <div className="mt-4 flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <img
              src="https://img.freepik.com/free-psd/social-media-logo-design_23-2151296987.jpg?ga=GA1.1.884081781.1728731746&semt=ais_hybrid"
              alt="Facebook"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition duration-300"
          >
            <img
              src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?ga=GA1.1.884081781.1728731746&semt=ais_hybrid"
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition duration-300"
          >
            <img
              src="https://img.freepik.com/premium-vector/twitter-new-x-logo-design-vector_1340851-70.jpg?ga=GA1.1.884081781.1728731746&semt=ais_hybrid"
              alt="Twitter"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
