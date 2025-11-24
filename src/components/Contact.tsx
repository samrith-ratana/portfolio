'use client';
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-6 tracking-tight">📬 Get In Touch</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Im open to freelance projects collaborations or full-time roles. Drop me a message — Ill respond within 24 hours.
        </p>

        <div className="max-w-5xl mx-auto bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">📞 Contact Information</h3>
            <p className="text-gray-400">
              You can reach me anytime via email or phone. Im based in Phnom Penh and available for remote work globally.
            </p>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="text-accent" size={20} />
                samrithratana22@mekong.edu.kh
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-accent" size={20} />
                (+855) 68 417 647
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-accent" size={20} />
                Phnom Penh Cambodia
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form action="https://formspree.io/f/your_form_id" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-accent focus:outline-none"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-accent focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-accent focus:outline-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-accent text-white font-semibold rounded-lg hover:bg-accent/80 transition-all shadow-md"
            >
              ✉️ Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
