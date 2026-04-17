import React, { useEffect, useState } from "react";
import axios from "axios";

function MyBookings() {
  const [appointments, setAppointments] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const fetchAppointments = () => {
    if (!storedUser?.email) return;

    axios
      .get(`http://localhost:5000/api/appointments/${storedUser.email}`)
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const cancelBooking = (id) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (!confirmCancel) return;

    axios
      .put(`http://localhost:5000/api/updateAppointment/${id}`, {
        status: "Cancelled"
      })
      .then(() => {
        fetchAppointments();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (appointment) => {
    if (appointment.status === "Cancelled") {
      alert("Cancelled appointments cannot be edited.");
      return;
    }

    const newDoctor = prompt("Enter Doctor Name:", appointment.doctor);
    const newDate = prompt("Enter Date (YYYY-MM-DD):", appointment.date);
    const newTime = prompt("Enter Time Slot:", appointment.timeSlot);

    if (!newDoctor || !newDate || !newTime) {
      alert("All fields are required");
      return;
    }

    axios
      .put(`http://localhost:5000/api/updateAppointment/${appointment._id}`, {
        doctor: newDoctor,
        date: newDate,
        timeSlot: newTime
      })
      .then(() => {
        alert("Appointment updated successfully");
        fetchAppointments();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mybookings-page">
      <div className="mybookings-header">
        <h1>My Bookings</h1>
      </div>

      <div className="mybookings-content">
        <h2>Appointments</h2>

        <div className="mybookings-table-box">
          <table>
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Appointment Date</th>
                <th>Time Slot</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((a) => (
                <tr key={a._id}>
                  <td>{a.doctor}</td>
                  <td>{a.date}</td>
                  <td>{a.timeSlot}</td>
                  <td>
                    <span
                      className={
                        a.status === "Confirmed"
                          ? "status-confirmed"
                          : a.status === "Pending"
                          ? "status-pending"
                          : "status-cancelled"
                      }
                    >
                      {a.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(a)}
                      disabled={a.status === "Cancelled"}
                    >
                      Edit
                    </button>

                    {a.status !== "Cancelled" ? (
                      <button
                        className="cancel-btn"
                        onClick={() => cancelBooking(a._id)}
                      >
                        Cancel
                      </button>
                    ) : (
                      <button className="disabled-btn" disabled>
                        Cancelled
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default MyBookings;