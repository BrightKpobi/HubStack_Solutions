import React from "react";

export default function PriceCard() {
  return (
    <>
      {/* Pricing Section */}
      <section className="mt-20 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Website Pricing
        </h2>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Basic</h3>
            <p className="text-4xl font-bold text-white mb-6">¢2500.00</p>
            <ul className="text-white/80 space-y-2 mb-6">
              <li> 3 Pages</li>
              <li> Responsive Design</li>
              <li> Basic SEO</li>
            </ul>
            <button className="px-6 py-3 bg-blue-500/20 text-white font-semibold rounded-full hover:bg-white/30 transition backdrop-blur-lg border border-blue-500/20">
              Order Now
            </button>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Pro</h3>
            <p className="text-4xl font-bold text-white mb-6">¢4500.00</p>
            <ul className="text-white/80 space-y-2 mb-6">
              <li> 6 Pages</li>
              <li> Responsive Design</li>
              <li> SEO Optimized</li>
              <li> Contact Form</li>
            </ul>
            <button className="px-6 py-3 bg-blue-500/20 text-white font-semibold rounded-full hover:bg-white/30 transition backdrop-blur-lg border border-blue-500/20">
              Order Now
            </button>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Enterprise
            </h3>
            <p className="text-4xl font-bold text-white mb-6">¢7500.00+</p>
            <ul className="text-white/80 space-y-2 mb-6">
              <li> Unlimited Pages</li>
              <li> Full SEO Suite</li>
              <li> E-commerce Integration</li>
              <li> Ongoing Support</li>
            </ul>
            <button className="px-6 py-3 bg-blue-500/20 text-white font-semibold rounded-full hover:bg-white/30 transition backdrop-blur-lg border border-blue-500/20">
              Order Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
