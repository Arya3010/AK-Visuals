import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gold">
          Capturing Moments, Creating Memories
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Welcome to AK Visuals — your one-stop destination for photography,
          cinematography, and visual storytelling.
        </p>

        <div className="flex gap-4">
          <Link
            to="/gallery"
            className="bg-gold text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
          >
            View Portfolio
          </Link>
          <Link
            to="/booking"
            className="border border-gold px-6 py-3 rounded-full font-semibold hover:bg-gold hover:text-black transition duration-300"
          >
            Book a Shoot
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
