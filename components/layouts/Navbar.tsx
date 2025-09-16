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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-500/10 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">HubStack</h1>

        {/* Desktop Menu - Center */}
        <div className="hidden md:flex flex-1 justify-center gap-8 text-white items-center">
          <Link href="/" className="hover:text-blue-300 transition">
            HOME
          </Link>
          <Link href="/about" className="hover:text-blue-300 transition">
            ABOUT
          </Link>
          <Link href="/services" className="hover:text-blue-300 transition">
            SERVICES
          </Link>
        </div>

        {/* Contact Button - Right */}
        <div className="hidden md:flex items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all px-6 py-3 rounded-full font-semibold text-white ">
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

              <form className="space-y-6 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-gray-700 font-medium"
                  >
                    Message
                  </Label>
                  <textarea
                    id="message"
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
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-white/10 backdrop-blur-lg px-4 pb-4 space-y-3 text-white font-medium border-t border-white/20"
          >
            <Link
              href="/"
              className="block hover:text-blue-300"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block hover:text-blue-300"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              className="block hover:text-blue-300"
              onClick={() => setIsOpen(false)}
            >
              SERVICES
            </Link>

            {/* Mobile Contact Popup */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:from-pink-500 hover:via-purple-500 hover:to-blue-500">
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

                <form className="space-y-6 mt-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name-mobile"
                      className="text-gray-700 font-medium"
                    >
                      Name
                    </Label>
                    <Input
                      id="name-mobile"
                      placeholder="John Doe"
                      className="h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email-mobile"
                      className="text-gray-700 font-medium"
                    >
                      Email
                    </Label>
                    <Input
                      id="email-mobile"
                      type="email"
                      placeholder="you@example.com"
                      className="h-12 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message-mobile"
                      className="text-gray-700 font-medium"
                    >
                      Message
                    </Label>
                    <textarea
                      id="message-mobile"
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
              </DialogContent>
            </Dialog>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
