/* About.tsx */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <main className="text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/80 via-black/80 to-black/90 -z-10"></div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          About Me
        </motion.h1>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          Hi 👋 I’m <span className="font-bold text-blue-400">HubStack</span>, a
          freelance web developer. I build modern, responsive, and scalable
          websites using <span className="text-blue-400">Next.js</span>,{" "}
          <span className="text-blue-400">React</span>, and{" "}
          <span className="text-blue-400">Tailwind CSS</span>.
        </motion.p>
      </section>

      {/* Infinite Skills Carousel */}
      <section className="py-20 px-6 bg-black/30">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-300">Technologies I work with daily.</p>
        </div>

        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {[
              "Next.js",
              "React",
              "Tailwind CSS",
              "Node.js",
              "MongoDB",
              "Framer Motion",
              "TypeScript",
              "Git/GitHub",
            ]
              .concat([
                "Next.js",
                "React",
                "Tailwind CSS",
                "Node.js",
                "MongoDB",
                "Framer Motion",
                "TypeScript",
                "Git/GitHub",
              ]) // duplicate for seamless loop
              .map((skill, i) => (
                <div
                  key={i}
                  className="min-w-[180px] text-center backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg"
                >
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
          </motion.div>
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
          <h2 className="text-3xl font-bold mb-4">Let’s Work Together 🚀</h2>
          <p className="text-gray-200 mb-6">
            Have an idea or project in mind? I’d love to help bring it to life
            with clean, modern, and scalable solutions.
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
