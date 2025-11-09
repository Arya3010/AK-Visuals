import React from "react";

const About = () => {
  return (
    <section className="bg-black text-white min-h-screen py-16 px-6 flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-8 text-center">
        About AK Visuals
      </h1>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photographer Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80"
            alt="Photographer"
            className="rounded-2xl shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 transition duration-300 w-80 md:w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Hi, I’m Abhishek Kashyap
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            I'm a passionate photographer dedicated to capturing real emotions,
            authentic moments, and timeless stories through my lens. Over the
            years, AK Visuals has transformed from a small creative vision into
            a trusted brand known for unique and vibrant photography.
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Whether it’s a grand wedding, a fashion shoot, or a corporate event,
            my goal is to create visuals that stay etched in your memory
            forever. Each frame tells a story — your story.
          </p>

          <h3 className="text-xl font-semibold text-yellow-500 mb-3">
            Achievements & Highlights
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>📸 Covered 50+ weddings & events across India</li>
            <li>🏆 Finalist in SIC Hackathon Photography Contest 2024</li>
            <li>🎓 Certified in Advanced Digital Photography</li>
            <li>🌍 Featured on multiple travel & lifestyle blogs</li>
          </ul>
        </div>
      </div>

      {/* Signature Section */}
      <div className="mt-12 text-center">
        <p className="text-yellow-500 font-medium text-lg italic">
          “Photography is not about the camera, it’s about how you see the world.”
        </p>
        <p className="text-gray-400 mt-2">– Abhishek Kashyap, Founder of AK Visuals</p>
      </div>
    </section>
  );
};

export default About;
