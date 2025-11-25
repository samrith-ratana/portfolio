'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!result.success) throw new Error("Failed to send message");

      alert("Message sent successfully! You will receive a reply soon.");
      form.reset();
    } catch (err) {
      alert("Failed to send message. Try again!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-6 tracking-tight">
          📬 Get In Touch
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          I'm open to freelance projects, collaborations, or full-time roles. 
          Drop me a message — I'll respond within 24 hours.
        </p>
        <div className="max-w-5xl mx-auto bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">📞 Contact Information</h3>
            <p className="text-gray-400">
              You can reach me anytime via email or phone. I'm based in Phnom Penh and available worldwide.
            </p>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-accent" />
                samrithratana22@mekong.edu.kh
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-accent" />
                (+855) 68 417 647
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-accent" />
                Phnom Penh, Cambodia
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Name</label>
              <input
                name="name"
                required
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-accent outline-none"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-accent outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-accent outline-none"
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-accent text-white font-semibold rounded-lg hover:bg-accent/80 transition-all shadow-md"
            >
              {loading ? "Sending..." : "✉️ Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
