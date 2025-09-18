"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Reusable Contact Form Component
function ContactForm({ idPrefix = "" }: { idPrefix?: string }) {
  return (
    <form className="space-y-6 mt-4">
      <div className="space-y-2">
        <Label
          htmlFor={`${idPrefix}name`}
          className="text-gray-700 font-medium"
        >
          Name
        </Label>
        <Input
          id={`${idPrefix}name`}
          placeholder="John Doe"
          className="h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor={`${idPrefix}email`}
          className="text-gray-700 font-medium"
        >
          Email
        </Label>
        <Input
          id={`${idPrefix}email`}
          type="email"
          placeholder="you@example.com"
          className="h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor={`${idPrefix}message`}
          className="text-gray-700 font-medium"
        >
          Message
        </Label>
        <textarea
          id={`${idPrefix}message`}
          rows={5}
          placeholder="Write your message..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        />
      </div>

      <Button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold text-lg hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 rounded-full transition-all"
      >
        Send Message
      </Button>
    </form>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl rounded-full z-50 bg-blue-500/10 backdrop-blur-lg border border-white/10 shadow-lg">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white tracking-wide">
          HubStack
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center gap-8 text-white font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-blue-300 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact Button - Desktop */}
        <div className="hidden md:flex items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all px-6 py-3 rounded-full font-semibold text-white shadow-md">
                CONTACT
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  Get in Touch
                </DialogTitle>
                <p className="text-gray-600 text-sm mt-1">
                  Fill out the form below and we’ll get back to you as soon as
                  possible.
                </p>
              </DialogHeader>
              <ContactForm idPrefix="desktop-" />
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-1/2 top-full mt-2 w-[90%] -translate-x-1/2 md:hidden 
                 bg-gradient-to-b from-blue-600/90 to-blue-900/95 backdrop-blur-xl 
                 border border-white/10 shadow-2xl rounded-2xl px-6 py-6 space-y-6"
          >
            <div className="flex flex-col space-y-4 text-lg font-medium text-white">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 px-3 rounded-lg hover:bg-white/10 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Contact Popup */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 rounded-full shadow-lg transition">
                  CONTACT
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-xl bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900">
                    Get in Touch
                  </DialogTitle>
                  <p className="text-gray-600 text-sm mt-1">
                    Fill out the form below and we’ll get back to you as soon as
                    possible.
                  </p>
                </DialogHeader>
                <ContactForm idPrefix="mobile-" />
              </DialogContent>
            </Dialog>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
