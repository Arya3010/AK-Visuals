import React from "react";

const AdminFooter = () => {
  return (
    <footer className="bg-black text-yellow-400 text-center py-3 border-t border-yellow-500 mt-8">
      <p className="text-sm tracking-wide">
        © {new Date().getFullYear()} AK Visuals Admin Dashboard 📸 | Designed with ❤️ by Team AK Visuals
      </p>
    </footer>
  );
};

export default AdminFooter;
