import React from "react";
import { Mail, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-black text-white min-h-screen py-16 px-6 flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-10 text-center">
        Get in Touch
      </h1>

      {/* Contact Form + Info Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <form
          className="bg-gray-900 p-8 rounded-2xl shadow-lg shadow-yellow-500/10 w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-2xl font-semibold mb-6 text-yellow-500">
            Send a Message
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-yellow-500">
            Let’s Connect
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I’d love to collaborate, shoot your events, or just chat about
            photography. Reach out via email or follow my social pages for
            updates and new projects!
          </p>

          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a
              href="mailto:ak8228407@gmail.com"
              className="flex items-center gap-2 hover:text-yellow-500 transition"
            >
              <Mail size={22} /> Email
            </a>

            <a
              href="https://www.instagram.com/journey_of_a_traveller/?igsh=dHFjZ3lmdGwwbzc4#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-500 transition"
            >
              <Instagram size={22} /> Instagram
            </a>

          
          </div>

          <div className="mt-10 text-gray-400">
            <p>📍 Based in India</p>
            <p>📞 +91 6306560538</p>
            <p>📧 ak8228407@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
