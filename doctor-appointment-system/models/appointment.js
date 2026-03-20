const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  email: String,
  mobile: String,
  doctor: String,
  date: String,
  timeSlot: String,
  status: {
    type: String,
    default: "Pending"
  }
});

module.exports = mongoose.model("Appointment", appointmentSchema);