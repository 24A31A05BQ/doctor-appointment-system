import React, { useState } from "react";
import axios from "axios";

function BookingPage() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    patientName: storedUser?.name || "",
    email: storedUser?.email || "",
    mobile: storedUser?.mobile || "",
    doctor: "",
    date: "",
    timeSlot: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(formData.date)) {
      alert("Please select a valid date");
      return;
    }

    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedYear = selectedDate.getFullYear();

    if (selectedDate < today) {
      alert("Please select a future date");
      return;
    }

    if (selectedYear < 2025 || selectedYear > 2100) {
      alert("Please select a realistic year");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/bookAppointment", formData);

      alert("Appointment Booked Successfully!");

      setFormData({
        patientName: storedUser?.name || "",
        email: storedUser?.email || "",
        mobile: storedUser?.mobile || "",
        doctor: "",
        date: "",
        timeSlot: ""
      });
    } catch (error) {
      alert("Error booking appointment");
    }
  };

  return (
    <div className="booking-section">
      <div className="booking-container">
        <div className="booking-left">
          <h2>Book an Appointment</h2>
          <p>
            Please fill out the form below to schedule an appointment with your
            preferred doctor.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
            alt="doctor"
          />
        </div>

        <div className="booking-right">
          <h2>Book Appointment</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="patientName"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              readOnly
              required
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
            >
              <option value="">Select Doctor</option>
              <option value="Dr John">Dr John</option>
              <option value="Dr Emily">Dr Emily</option>
              <option value="Dr Sarah">Dr Sarah</option>
              <option value="Dr Michael">Dr Michael</option>
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              max="2100-12-31"
              required
            />

            <select
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              required
            >
              <option value="">Select Time Slot</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
            </select>

            <button className="book-btn" type="submit">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;