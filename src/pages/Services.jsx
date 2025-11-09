import React from "react";

const services = [
  {
    title: "Wedding Photography",
    description:
      "Capturing the emotions, beauty, and magic of your special day with cinematic storytelling.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    price: "₹15,000 - ₹50,000",
  },
  {
    title: "Fashion Shoots",
    description:
      "Showcasing your style, attitude, and confidence with professional fashion photography.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    price: "₹10,000 - ₹30,000",
  },
  {
    title: "Event Photography",
    description:
      "Capturing lively moments at birthdays, corporate events, and concerts with creative angles.",
    image:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=800&q=80",
    price: "₹8,000 - ₹25,000",
  },
  {
    title: "Product Shoots",
    description:
      "High-quality, detailed photography to make your brand products stand out.",
    image:
      "https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?auto=format&fit=crop&w=800&q=80",
    price: "₹5,000 - ₹15,000",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
          Our Services
        </h1>
        <p className="text-gray-400">
          Choose the perfect photography experience that fits your vision.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/40 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-yellow-500 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <p className="font-semibold text-white">{service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
