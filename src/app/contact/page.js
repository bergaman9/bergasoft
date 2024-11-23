"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#1e0131] to-[#00040d] text-[#d1d5db]">
      {/* Header */}
      <div className="w-full">
        <Header showHomeLink={true} />
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-8 w-full max-w-3xl mx-auto mt-12 px-4 sm:px-0">
        <h1 className="text-3xl font-bold text-[#ff007f] mb-6 text-center">Contact Us</h1>

        {/* Başarı veya Hata Mesajı */}
        {status === "success" && (
          <div className="w-full p-4 mb-4 text-center text-green-500 bg-green-100 rounded-lg">
            Your message has been sent successfully!
          </div>
        )}
        {status === "error" && (
          <div className="w-full p-4 mb-4 text-center text-red-500 bg-red-100 rounded-lg">
            There was an error sending your message. Please try again.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-[#1e0131] p-6 rounded-lg border border-[#2a2e43]">
          <label className="block mb-4">
            <span className="text-[#00c8ff]">Your Name</span>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 bg-black border border-[#2a2e43] rounded-lg text-[#d1d5db]"
              placeholder="Enter your name"
              required
            />
          </label>
          <label className="block mb-4">
            <span className="text-[#00c8ff]">Your Email</span>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 bg-black border border-[#2a2e43] rounded-lg text-[#d1d5db]"
              placeholder="Enter your email"
              required
            />
          </label>
          <label className="block mb-4">
            <span className="text-[#00c8ff]">Your Message</span>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 bg-black border border-[#2a2e43] rounded-lg text-[#d1d5db]"
              rows="4"
              placeholder="Write your message..."
              required
            />
          </label>
          <button
            type="submit"
            className="w-full p-2 bg-[#ff007f] text-white font-semibold rounded-lg hover:bg-[#ff3399] transition"
          >
            Send Message
          </button>
        </form>
      </main>

      {/* Footer */}
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
