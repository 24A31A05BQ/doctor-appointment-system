import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import MyBookings from "./MyBookings";
import AdminDashboard from "./AdminDashboard";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <HomePage />
            </>
          }
        />

        <Route
          path="/booking"
          element={
            <>
              <Navbar />
              <BookingPage />
            </>
          }
        />

        <Route
          path="/mybookings"
          element={
            <>
              <Navbar />
              <MyBookings />
            </>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <>
                <Navbar />
                <AdminDashboard />
              </>
            </ProtectedAdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;