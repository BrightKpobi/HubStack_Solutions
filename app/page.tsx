"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    desc: "Modern, responsive websites powered by Next.js & React.",
  },
  {
    title: "API Integration",
    desc: "Seamless backend APIs and secure database connections.",
  },
  {
    title: "UI/UX & SEO",
    desc: "User-centered designs optimized for search engines.",
  },
];

const projects = [
  {
    title: "Portfolio Website",
    desc: "A sleek personal portfolio built with Next.js.",
    link: "#",
  },
  {
    title: "University Website",
    desc: "Full-stack ",
    link: "#",
  },
  {
    title: "A Church Website",
    desc: "Analytics dashboard with authentication ",
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="text-white">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-5xl font-bold mb-4">HubStack</h1>
        <p className="text-3xl font-semibold text-gray-200 mb-6">
          Building modern web experiences with Next.js & React
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition"
          >
            Hire Me
          </Link>
          <Link
            href="/portfolio"
            className="px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            View Portfolio
          </Link>
        </div>
      </motion.section>

      {/* About Preview */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Our Company
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300"
        >
          HubStack is my personal portfolio presented as a brand — a space where
          I showcase my work, skills, and projects while building a professional
          identity.
        </motion.p>
        <Link
          href="/about"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
        >
          Learn More
        </Link>
      </section>

      {/* Services */}
      <section className="py-20 px-6 text-center bg-black/30">
        <h2 className="text-3xl font-bold mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-200">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg hover:scale-105 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-200 mb-4">{p.desc}</p>
              <Link href={p.link} className="text-blue-400 hover:underline">
                View Project →
              </Link>
            </motion.div>
          ))}
        </div>
        <Link
          href="/portfolio"
          className="inline-block mt-10 px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
        >
          View All Projects
        </Link>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-10 shadow-lg max-w-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to build your next project?
          </h2>
          <p className="text-gray-200 mb-6">
            Let’s collaborate and turn your ideas into reality.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
