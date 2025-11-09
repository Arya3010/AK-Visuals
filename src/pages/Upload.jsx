import React, { useState } from "react";

const Upload = () => {
  const [images, setImages] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-20 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Upload Photos</h1>

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleUpload}
        className="border p-2 rounded-md mb-6"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {images.map((src, index) => (
          <img key={index} src={src} alt="preview" className="rounded-lg shadow-lg" />
        ))}
      </div>
    </div>
  );
};

export default Upload;
