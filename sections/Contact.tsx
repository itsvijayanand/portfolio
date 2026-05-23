"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import MagneticButton from "@/components/MagneticButton";

import QRCode from "react-qr-code";

// Generate vCard data dynamically
const generateVCard = () => {
  const vCard = `BEGIN:VCARD
VERSION:3.0
N:${portfolioData.name.split(" ").pop()};${portfolioData.name.split(" ")[0]};;;
FN:${portfolioData.name}
TITLE:${portfolioData.roleTitle}
EMAIL;type=INTERNET;type=WORK:${portfolioData.contact.email}
TEL;type=CELL:${portfolioData.contact.phone}
URL:${portfolioData.contact.socials.find(s => s.platform === "LinkedIn")?.url || ""}
END:VCARD`;
  return vCard;
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let tempErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    fetch(`https://formsubmit.co/ajax/${portfolioData.contact.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `Portfolio Inquiry from ${formData.name}`,
        _template: "box",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsSubmitting(false);
        if (data.success === "true" || data.success === true) {
          setIsSuccess(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setIsSuccess(false), 5000);
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        console.error(error);
        setIsSubmitting(false);
        alert("Failed to send inquiry. Please try again later.");
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-[#e5e5e5] py-24 px-6 md:px-12 border-b border-stone-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Title */}
        <div className="flex flex-col items-start select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-[#f4b223] font-bold mb-2">
            06 / COLLABORATIONS
          </span>
          <h2
            className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            GET IN TOUCH.
          </h2>
        </div>

        {/* Main Grid: Form vs Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#e5e5e5] border-2 border-stone-900 rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden text-left">
            <h3
              className="text-2xl md:text-3xl font-bold text-stone-900 mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Start a Conversation
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Name field */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-stone-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`w-full bg-stone-200 border-2 rounded-xl px-4 py-3 font-mono text-sm text-stone-900 focus:outline-none transition-colors ${
                    errors.name ? "border-red-500 focus:border-red-500" : "border-stone-300 focus:border-stone-950"
                  }`}
                />
                {errors.name && (
                  <span className="flex items-center gap-1.5 text-xs text-red-600 font-mono mt-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-stone-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@company.com"
                  className={`w-full bg-stone-200 border-2 rounded-xl px-4 py-3 font-mono text-sm text-stone-900 focus:outline-none transition-colors ${
                    errors.email ? "border-red-500 focus:border-red-500" : "border-stone-300 focus:border-stone-950"
                  }`}
                />
                {errors.email && (
                  <span className="flex items-center gap-1.5 text-xs text-red-600 font-mono mt-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                  </span>
                )}
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-stone-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project, timelines, and goals..."
                  className={`w-full bg-stone-200 border-2 rounded-xl px-4 py-3 font-mono text-sm text-stone-900 focus:outline-none transition-colors resize-none ${
                    errors.message ? "border-red-500 focus:border-red-500" : "border-stone-300 focus:border-stone-950"
                  }`}
                />
                {errors.message && (
                  <span className="flex items-center gap-1.5 text-xs text-red-600 font-mono mt-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-4 flex items-center justify-between gap-4">
                <MagneticButton>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-stone-900 text-[#e5e5e5] uppercase font-mono tracking-widest text-xs font-bold rounded-full hover:bg-[#f4b223] hover:text-stone-900 disabled:opacity-50 transition-colors flex items-center gap-2 group"
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </MagneticButton>

                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-green-700 font-mono text-xs uppercase font-bold"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Message Received!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </form>
          </div>

          {/* Right Column: Dynamic QR module & Socials metadata */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-stone-900 text-left">
            
            {/* Elegant QR Card */}
            <div className="bg-[#e5e5e5] border-2 border-stone-300 rounded-[2.5rem] p-8 flex items-center gap-6 shadow-sm">
              <div className="p-3 bg-stone-200 border-2 border-stone-900 rounded-3xl flex-shrink-0 flex items-center justify-center">
                <div className="bg-transparent p-1 rounded-2xl">
                  <QRCode
                    value={generateVCard()}
                    size={88}
                    bgColor="transparent"
                    fgColor="#1c1917"
                    level="L"
                  />
                </div>
              </div>
              <div className="font-mono">
                <h4 className="text-base font-bold text-stone-950 uppercase tracking-wider mb-1">
                  SCAN FOR DETAILS
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Scan to save contact card directly or email at <span className="underline font-bold text-[#f4b223]">{portfolioData.contact.email}</span>.
                </p>
              </div>
            </div>

            {/* Direct Contact links */}
            <div className="flex flex-col gap-4 font-mono text-sm bg-stone-200/50 p-8 rounded-[2.5rem] border border-stone-300">
              <div>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">Email Directly</p>
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="text-lg font-bold text-stone-900 hover:text-[#f4b223] transition-colors"
                >
                  {portfolioData.contact.email}
                </a>
              </div>
              <div>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">Phone Contact</p>
                <a
                  href={`tel:${portfolioData.contact.phone}`}
                  className="text-lg font-bold text-stone-900 hover:text-[#f4b223] transition-colors"
                >
                  {portfolioData.contact.phone}
                </a>
              </div>
            </div>

            {/* Social Grid */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-stone-500">
                Social Networks
              </span>
              <div className="grid grid-cols-2 gap-4">
                {portfolioData.contact.socials.map((soc) => (
                  <motion.a
                    key={soc.platform}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-[#e5e5e5] border-2 border-stone-300 hover:border-stone-900 rounded-2xl flex items-center justify-between text-stone-900 font-mono text-xs font-bold uppercase tracking-wider group"
                  >
                    <span>{soc.platform}</span>
                    <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </motion.a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
