"use client";

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white font-serif min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-[#6a1b9a] mb-6"
        >
          Contact Us
        </motion.h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] rounded-full mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-purple-600 w-6 h-6 mt-1" />
              <p>
                <strong>Abhishek International School</strong><br />
                Plot No.2, Sector No.6,<br />
                Moshi Pradhikaran, PCNTDA, Pune,<br />
                Maharashtra 412105
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-purple-600 w-6 h-6 mt-1" />
              <p>abhishekinternational.cbse@gmail.com</p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-purple-600 w-6 h-6 mt-1" />
              <p>Call: 8446713030<br />Whatsapp: 8446713030</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-4">
              <a href="#" className="text-purple-600 hover:text-purple-800">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-800">
                <Youtube className="w-6 h-6" />
              </a>
            </div>

            {/* Google Map */}
            <div className="mt-6">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6204447106055!2d73.84989167504526!3d18.635353867440224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7a93b83f15b%3A0x61f8e0892a4d681f!2sAbhishek%20International%20School!5e0!3m2!1sen!2sin!4v1719810000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                className="rounded-xl shadow-lg border"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-xl shadow-xl border space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input type="text" id="name" className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea id="message" rows={5} className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
