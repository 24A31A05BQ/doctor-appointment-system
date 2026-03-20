import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = () => {
    axios
      .get("http://localhost:5000/api/appointments")
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

  const updateStatus = (id, status) => {
    axios
      .put(`http://localhost:5000/api/updateAppointment/${id}`, {
        status: status
      })
      .then(() => {
        fetchAppointments();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const total = appointments.length;
  const pending = appointments.filter((a) => a.status === "Pending").length;
  const confirmed = appointments.filter((a) => a.status === "Confirmed").length;

  return (
    <div className="admin-page">
      <h2 className="admin-title">Admin Dashboard</h2>
      <p className="admin-subtitle">
        Welcome Admin! You can manage appointments easily.
      </p>

      <div className="dashboard-cards">
        <div className="card total">
          <h3>{total}</h3>
          <p>Total Appointments</p>
        </div>

        <div className="card pending">
          <h3>{pending}</h3>
          <p>Pending Appointments</p>
        </div>

        <div className="card confirmed">
          <h3>{confirmed}</h3>
          <p>Confirmed Appointments</p>
        </div>
      </div>

      <h3 className="table-title">All Appointments</h3>

      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time Slot</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((a) => (
            <tr key={a._id}>
              <td>{a.patientName}</td>
              <td>{a.doctor}</td>
              <td>{a.date}</td>
              <td>{a.timeSlot}</td>
              <td>{a.status}</td>
              <td>
                <button
                  className="confirm-btn"
                  onClick={() => updateStatus(a._id, "Confirmed")}
                >
                  Confirm
                </button>

                <button
                  className="cancel-btn"
                  onClick={() => updateStatus(a._id, "Cancelled")}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;