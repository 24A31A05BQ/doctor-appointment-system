import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="hero">
        <div className="hero-text">
          <h1>Book an Appointment with a Doctor</h1>
          <p>
            Easily schedule your appointment with our experienced doctors.
            Choose your doctor and book a convenient time slot.
          </p>

          <button className="blue-btn" onClick={() => navigate("/booking")}>
            Book Appointment
          </button>
        </div>

        <div className="hero-img">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
            alt="doctor"
          />
        </div>
      </div>

      <div className="section">
        <h2>Our Doctors</h2>

        <div className="doctor-grid">
          {[
            { name: "Dr. John Smith", spec: "Cardiologist" },
            { name: "Dr. Emily Davis", spec: "Dermatologist" },
            { name: "Dr. Michael Brown", spec: "Orthopedic" },
            { name: "Dr. Sarah Wilson", spec: "Pediatrician" }
          ].map((doc, index) => (
            <div className="doctor-card" key={index}>
              <img
                src={
                  index % 2 === 0
                    ? "https://cdn-icons-png.flaticon.com/512/2785/2785482.png"
                    : "https://cdn-icons-png.flaticon.com/512/2785/2785544.png"
                }
                alt="doctor"
              />
              <h3>{doc.name}</h3>
              <p>{doc.spec}</p>
              <button
                className="blue-btn small-btn"
                onClick={() => navigate("/booking")}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;