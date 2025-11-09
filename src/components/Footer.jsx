import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-center py-6 border-t border-gray-800">
      <p className="text-sm tracking-wide">
        © 2025 <span className="text-yellow-400 font-semibold">AK Visuals</span>. All rights reserved.
      </p>

      <div className="flex justify-center space-x-6 mt-3">
        <a
          href="https://www.instagram.com/journey_of_a_traveller/?igsh=dHFjZ3lmdGwwbzc4#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition duration-300"
        >
          Instagram
        </a>

        <a
          href="mailto:ak8228407@gmail.com"
          className="hover:text-yellow-400 transition duration-300"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
