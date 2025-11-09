import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // 🔹 Fetch bookings
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      window.location.href = "/admin/login";
      return;
    }

    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admin/bookings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          setError("Unauthorized. Please log in again.");
          localStorage.removeItem("adminToken");
          setTimeout(() => (window.location.href = "/admin/login"), 2000);
          return;
        }

        const data = await response.json();
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // 🔹 Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setMessage("Logging out...");
    setTimeout(() => (window.location.href = "/admin/login"), 1000);
  };

  // 🔹 Toggle booking status
  const toggleStatus = async (id, currentStatus) => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      alert("Admin token missing — please login again.");
      window.location.href = "/admin/login";
      return;
    }

    const newStatus = currentStatus === "Completed" ? "Pending" : "Completed";

    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Update status failed:", data);
        throw new Error(data.message || "Failed to update status");
      }

      setBookings((prev) =>
        prev.map((b) => (b._id === id ? data : b))
      );
      setMessage(`Booking marked as ${newStatus}`);
    } catch (err) {
      console.error("Error updating status:", err);
      setError(err.message || "Error updating status");
    }
  };

  // 🔹 Loading & Error states
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-yellow-400 text-lg">
        Loading bookings...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-500 text-lg">
        {error}
      </div>
    );

  return (
     <div
    className="min-h-screen bg-black text-white flex flex-col relative z-[9999]"
    style={{ position: "relative" }}
  >
      {/* 🟡 Navbar */}
      <header className="w-full bg-black text-yellow-400 py-4 px-6 flex justify-between items-center border-b border-yellow-500 shadow-md">
        <h1 className="text-2xl font-extrabold tracking-wide">
          📸 AK Visuals Admin
        </h1>
        <button
          onClick={handleLogout}
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Logout
        </button>
      </header>

      {/* 📋 Dashboard Content */}
      <main className="flex-1 p-6 overflow-x-auto">
        {message && (
          <p className="text-green-400 text-center mb-4 font-medium">{message}</p>
        )}

        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          Booking Management
        </h2>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-400 text-lg mt-10">
            No bookings yet.
          </p>
        ) : (
          
          <div className="overflow-x-auto">
            <table className="w-full border border-yellow-700 rounded-xl overflow-hidden shadow-lg">
              <thead className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Shoot Type</th>
                  <th className="p-3 text-left">Message</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="border-b border-yellow-800 hover:bg-[#1a1a1a] transition"
                  >
                    <td className="p-3 text-yellow-300 font-semibold">
                      {booking.name}
                    </td>
                    <td className="p-3 text-gray-300">{booking.email}</td>
                    <td className="p-3 text-gray-300">{booking.phone}</td>
                    <td className="p-3 text-gray-300">
                      {new Date(booking.date).toLocaleDateString()}
                    </td>
                    <td className="p-3 text-gray-300">{booking.shootType}</td>
                    <td className="p-3 text-gray-400 italic">
                      {booking.message || "—"}
                    </td>
                    <td
                      className={`p-3 font-semibold ${
                        booking.status === "Completed"
                          ? "text-green-400"
                          : "text-yellow-400"
                      }`}
                    >
                      {booking.status || "Pending"}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() =>
                          toggleStatus(booking._id, booking.status)
                        }
                        className="bg-yellow-500 text-black px-3 py-1 rounded-md hover:bg-yellow-400 transition"
                      >
                        Mark as{" "}
                        {booking.status === "Completed"
                          ? "Pending"
                          : "Completed"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* ⚫ Footer */}
      <footer className="bg-black text-yellow-400 text-center py-4 border-t border-yellow-600">
        © {new Date().getFullYear()} AK Visuals — Admin Panel 📸
      </footer>
    </div>
  );
};

export default AdminDashboard;
