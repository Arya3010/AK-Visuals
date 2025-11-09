import React, { useState } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        localStorage.setItem("adminToken", data.token);
        alert("✅ Login Successful!");
        window.location.href = "/admin/dashboard"; // redirect to dashboard
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setLoading(false);
      setError("⚙️ Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="bg-gray-950/70 backdrop-blur-lg border border-yellow-600/40 shadow-[0_0_25px_rgba(234,179,8,0.15)] rounded-2xl p-8 w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center tracking-wide uppercase">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-2 text-yellow-400 font-semibold">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-black border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-100 placeholder-gray-400"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-yellow-400 font-semibold">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-black border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-100 placeholder-gray-400"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="text-red-400 bg-red-900/20 border border-red-700 rounded-lg p-2 text-center font-medium">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2.5 rounded-lg shadow-lg transition-all duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} AK Visuals | Admin Panel
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
