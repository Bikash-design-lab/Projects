import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Common/Navbar";
import { Route, Routes } from "react-router-dom";
import Quiz from "./Pages/Quiz";
import LeaderBoard from "./Pages/LeaderBoard";
import Register from "./Pages/Register";
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
          path="/Quiz/:userId"
          element={
            <ProtectedRoutes>
              <Quiz />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/LeaderBoard/:userId"
          element={
            <ProtectedRoutes>
              <LeaderBoard />
            </ProtectedRoutes>
          }
        />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
