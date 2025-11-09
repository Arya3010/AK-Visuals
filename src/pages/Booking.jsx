import React, { useState } from "react";

const BACKEND_URL = process.env.VITE_APP_BACKEND_URL || "http://localhost:5000";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    shootType: "",
    date: "",
    message: "",
  });

  const [popup, setPopup] = useState({ show: false, message: "", success: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.date) {
      setPopup({ show: true, message: "⚠️ Please select a date for your booking.", success: false });
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setPopup({ show: true, message: "✨ Booking submitted successfully!", success: true });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          shootType: "",
          date: "",
          message: "",
        });
      } else {
        const errorMessage = data.message || data.error || "⚠️ Failed to submit booking. Check server logs.";
        setPopup({ show: true, message: errorMessage, success: false });
      }
    } catch (error) {
      console.error("❌ Error submitting booking:", error);
      setPopup({ show: true, message: "⚙️ Network error or server unreachable. Check console.", success: false });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center px-4 py-8">
      <h2 className="text-3xl font-bold text-yellow-500 mb-6 tracking-wide uppercase">
        Book Your Shoot
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-950/70 backdrop-blur-md border border-yellow-700/40 shadow-lg rounded-xl p-6 w-full max-w-md text-white"
      >
        <div className="space-y-3">
          <div>
            <label className="block mb-1 text-yellow-400 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-100"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-yellow-400 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-100"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-yellow-400 font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-100"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-yellow-400 font-semibold">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-100"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-yellow-400 font-semibold">Service Type</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-black border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-100"
              required
            >
              <option value="">Select a service</option>
              <option value="Wedding">Wedding</option>
              <option value="Portrait">Portrait</option>
              <option value="Event">Event</option>
              <option value="Product">Product</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-yellow-400 font-semibold">Shoot Type</label>
            <input
              type="text"
              name="shootType"
              value={formData.shootType}
              onChange={handleChange}
              placeholder="e.g. Indoor, Outdoor, Pre-Wedding"
              className="w-full px-3 py-2 bg-black border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-100"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-yellow-400 font-semibold">Message (optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              placeholder="Add any specific requirements..."
              className="w-full px-3 py-2 bg-black border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-100"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-yellow-500 text-black font-bold py-2 rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-md"
        >
          Submit Booking
        </button>
      </form>

      {popup.show && (
        <div
          className={`mt-4 px-4 py-2 rounded-lg text-center font-semibold shadow-md transition-all duration-500 ${
            popup.success
              ? "bg-yellow-500/20 border border-yellow-500 text-yellow-400"
              : "bg-gray-800/80 border border-red-500 text-red-400"
          }`}
        >
          {popup.message}
        </div>
      )}
    </div>
  );
};

export default Booking;
