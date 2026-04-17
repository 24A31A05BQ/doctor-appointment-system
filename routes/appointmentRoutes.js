const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// Book appointment
router.post("/bookAppointment", async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error booking appointment" });
  }
});

// Get all appointments
router.get("/appointments", async (req, res) => {
  try {
    const data = await Appointment.find();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching appointments");
  }
});

// Get appointments by user email
router.get("/appointments/:email", async (req, res) => {
  try {
    const data = await Appointment.find({ email: req.params.email });
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching user appointments");
  }
});

// Update appointment (doctor/date/time/status)
router.put("/updateAppointment/:id", async (req, res) => {
  try {
    const { doctor, date, timeSlot, status } = req.body;

    const updateData = {};
    if (doctor) updateData.doctor = doctor;
    if (date) updateData.date = date;
    if (timeSlot) updateData.timeSlot = timeSlot;
    if (status) updateData.status = status;

    await Appointment.findByIdAndUpdate(req.params.id, updateData);

    res.json({ message: "Updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error updating appointment" });
  }
});

module.exports = router;