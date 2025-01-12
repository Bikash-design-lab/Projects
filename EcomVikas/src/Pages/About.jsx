import React from "react";
import { ArrowRight, ShoppingBag, Truck, Headphones } from "lucide-react";

const About = () => {
  // Feature cards data
  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-blue-600" />,
      title: "Wide Product Selection",
      description:
        "Browse through thousands of products from top brands at competitive prices.",
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping to get your products to you when you need them.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      title: "24/7 Support",
      description:
        "Our customer service team is always here to help with any questions.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section with Background Image */}
      <div className="relative rounded-xl overflow-hidden mb-16">
        <img
          src="https://img.freepik.com/free-psd/3d-rendering-delivery-sales-blank-banner_23-2151558591.jpg?ga=GA1.1.884081781.1728731746&semt=ais_hybrid"
          alt="Store showcase"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40 flex items-center">
          <div className="text-white px-8 max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
            <p className="text-xl text-gray-100">
              Your one-stop destination for quality products at amazing prices.
              We're committed to providing the best shopping experience.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Quality Products,
            <span className="text-blue-600">Exceptional Service</span>
          </h2>
          <p className="text-gray-600">
            We carefully curate our selection to bring you the finest products
            from around the world. Our team is dedicated to ensuring your
            shopping experience exceeds expectations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://img.freepik.com/premium-vector/online-shopping-illustration_178888-182.jpg?ga=GA1.1.884081781.1728731746&semt=ais_hybrid"
              alt="Product showcase 1"
              className="rounded-lg w-full h-[150px] object-cover"
            />
            <img
              src="https://img.freepik.com/premium-vector/flat-online-shopping-illustration_123888-9.jpg?ga=GA1.1.884081781.1728731746&semt=ais_hybrid"
              alt="Product showcase 2"
              className="rounded-lg w-full h-[150px] object-cover"
            />
          </div>
        </div>
        <div className="relative">
          <img
            src="https://img.freepik.com/free-vector/purchase-online-onboarding-app-screens_23-2148406536.jpg?ga=GA1.1.884081781.1728731746&semt=ais_hybrid"
            alt="Team at work"
            className="rounded-lg w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-gray-900 font-medium">
              "Our passion is delivering exceptional value to our customers"
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-blue-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          We strive to revolutionize online shopping by offering a seamless,
          user-friendly experience with top-quality products. Our commitment to
          customer satisfaction drives everything we do.
        </p>
        <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
          Learn more about our values
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      {/* Statistics with Background Image */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src="/api/placeholder/1200/300"
          alt="Background"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center h-full items-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-blue-100">Products</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-blue-100">Brands</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
