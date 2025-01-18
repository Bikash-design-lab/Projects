import "./App.css";
import Navbar from "./Components/Common/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import ProductDetails from "./Pages/ProductDetails";
// import AddToCart from "./Pages/AddToCart";
import ProtectedRoutes from "./Utils/ProtectedRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/Products"
          element={
            <ProtectedRoutes>
              <Products />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/Profile"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />
        <Route path="/About" element={<About />} />{" "}
        {/* Corrected About route */}
        <Route path="/Register" element={<Register />} />
        <Route path="/products/:userID" element={<ProductDetails />} />{" "}
        {/* Corrected ProductDetails route */}
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/:userID/AddToCart" element={<AddToCart />} /> */}
      </Routes>
    </>
  );
}

export default App;
