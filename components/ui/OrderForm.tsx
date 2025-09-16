"use client";

import React from "react";

type OrderFormProps = {
  plan?: string | null;
};

export default function OrderForm({ plan }: OrderFormProps) {
  return (
    <form className="space-y-4 text-white">
      <h3 className="text-lg font-semibold">
        Selected Plan: {plan ? plan : "None"}
      </h3>

      <div>
        <label className="block text-sm mb-1">Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Your Email"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Project Details</label>
        <textarea
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-blue-500 outline-none"
          rows={4}
          placeholder="Tell me about your project..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition font-semibold"
      >
        Submit Order
      </button>
    </form>
  );
}
