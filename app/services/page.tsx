"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import OrderForm from "@/components/ui/OrderForm";

const services = [
  {
    title: "Web Development",
    desc: "Responsive, SEO-friendly, and modern websites using Next.js, React, and Tailwind CSS.",
  },
  // {
  //   title: "API Integration",
  //   desc: "Seamlessly connect applications with RESTful APIs, GraphQL, and third-party services.",
  // },
  // {
  //   title: "UI/UX Design",
  //   desc: "Clean, modern, and user-friendly designs focused on usability and aesthetics.",
  // },
  {
    title: "E-commerce Solutions",
    desc: "Custom online stores with payments, authentication, and admin dashboards.",
  },
  // {
  //   title: "SaaS Platforms",
  //   desc: "Scalable SaaS applications with dashboards, charts, and authentication.",
  // },
  {
    title: "Website Optimization",
    desc: "Improve speed, performance, and SEO to rank higher and load faster.",
  },
];

const pricingPlans = [
  {
    title: "Basic",
    price: "¢5,000 – 22,500",
    features: [
      "Business Website",
      "Responsive Design",
      "5–10 pages",
      // "1 Revision",
    ],
  },
  {
    title: "Standard",
    price: "¢7,500 – 45,000",
    features: [
      // "5 Pages Website",
      "NGO Website",
      "SEO + Analytics",
      // "3 Revisions",
    ],
  },
  {
    title: "Premium",
    price: "¢45,000 – 300,000+ ",
    features: [
      " E-Commerce Website",
      "Real Estate / Marketplace",
      "Performance Optimization",
      // "Unlimited Revisions",
    ],
  },
];

export default function Service() {
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleOrderClick = (plan: string) => {
    setSelectedPlan(plan);
    setShowForm(true);
  };

  return (
    <main className="text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/80 via-black/80 to-black/90 -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-300">
            I provide full-stack web development solutions tailored to your
            needs.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-blue-950 to-black">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-gray-300">
            Choose the plan that best fits your project needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg flex flex-col justify-between hover:scale-105 transition"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-3">{plan.title}</h3>
                <p className="text-2xl font-bold text-blue-400 mb-6">
                  {plan.price}
                </p>
                <ul className="space-y-2 text-gray-300">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}> {feature}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleOrderClick(plan.title)}
                className="mt-8 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition text-center"
              >
                Order Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-10 shadow-lg max-w-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to start your project?
          </h2>
          <p className="text-gray-200 mb-6">
            Let’s work together to bring your ideas to life with modern web
            technologies.
          </p>
          <Link
            href="#contact"
            className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </section>

      {/* Order Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg w-[90%] max-w-lg relative"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-200 hover:text-white"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Order: {selectedPlan}
            </h2>
            <OrderForm plan={selectedPlan} />
          </motion.div>
        </div>
      )}
    </main>
  );
}
