import React from "react";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <nav className="bg-black text-yellow-400 px-6 py-4 flex justify-between items-center shadow-md border-b border-yellow-500">
      <h1
        className="text-2xl font-bold cursor-pointer hover:text-yellow-300 transition"
        onClick={() => navigate("/admin")}
      >
        AK Visuals Admin
      </h1>

      <div className="flex gap-6">
        <button
          onClick={() => navigate("/admin")}
          className="hover:text-yellow-300 transition"
        >
          Dashboard
        </button>
        <button
          onClick={handleLogout}
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-1 rounded-lg font-semibold transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
