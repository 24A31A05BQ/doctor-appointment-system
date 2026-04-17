import React from "react";

function Home() {
  return (
    <>
      <div className="hero" id="home">
        <div className="hero-text">
          <h1>Book an Appointment with a Doctor</h1>
          <p>
            Easily schedule your appointment with our experienced doctors.
            Choose your doctor and book a convenient time slot.
          </p>

          <button className="blue-btn">Book Appointment</button>
        </div>

        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
            alt="doctor"
            width="220"
          />
        </div>
      </div>

      <div className="section" id="doctors">
        <h2>Our Doctors</h2>

        <div className="doctor-grid">
          <div className="doctor-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2785/2785482.png"
              alt="doctor1"
            />
            <h3>Dr. John Smith</h3>
            <p>Cardiologist</p>
            <button className="blue-btn">Book Now</button>
          </div>

          <div className="doctor-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2785/2785544.png"
              alt="doctor2"
            />
            <h3>Dr. Emily Davis</h3>
            <p>Dermatologist</p>
            <button className="blue-btn">Book Now</button>
          </div>

          <div className="doctor-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2785/2785482.png"
              alt="doctor3"
            />
            <h3>Dr. Michael Brown</h3>
            <p>Orthopedic</p>
            <button className="blue-btn">Book Now</button>
          </div>

          <div className="doctor-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2785/2785544.png"
              alt="doctor4"
            />
            <h3>Dr. Sarah Wilson</h3>
            <p>Pediatrician</p>
            <button className="blue-btn">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;