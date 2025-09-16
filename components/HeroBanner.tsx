import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <video src="banner.mp4"></video>
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Better Web Experience <br />
          With HubStack
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Build amazing web apps with Next.js and Tailwind
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
