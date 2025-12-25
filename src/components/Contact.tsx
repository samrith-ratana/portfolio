'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Facebook, Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  // Simple form handler
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Simulate network delay (1.5 seconds)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Logic: Here you would usually send data to EmailJS or your API
    alert("Message sent successfully! (This is a demo)");
    
    setLoading(false);
    // Optional: Reset form here
    // (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="py-24 px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        
        {/* Sticky Header */}
        <div>
          <h2 className="text-6xl font-extrabold tracking-tight sticky top-32 text-slate-900 dark:text-white">
            Contact
            {/* Matches your site's accent style */}
            <div className="h-1.5 w-[70px] bg-blue-300 mt-2 rounded-full"></div>
          </h2>
        </div>

        {/* Contact Card & Form */}
        <div className="md:col-span-2 pl-0 md:pl-12">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-10 grid md:grid-cols-2 gap-12 shadow-sm">
            
            {/* Left Side: Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Let&apos;s connect</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
                  Available for full-time roles and backend system consultations. I usually respond within 24 hours.
                </p>

                <ul className="space-y-4 mb-8 text-slate-900 dark:text-slate-200">
                  <li className="flex items-center gap-3 text-sm font-bold group cursor-pointer">
                    <div className="p-2 bg-blue-50 dark:bg-slate-800 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Mail size={18} />
                    </div>
                    <span className="hover:text-blue-600 transition">samrithratana@outlook.com</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold group cursor-pointer">
                    <div className="p-2 bg-blue-50 dark:bg-slate-800 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Phone size={18} />
                    </div>
                    <span>(+855) 96 622 6109</span>
                  </li>
                </ul>
              </div>
              
              {/* Social Icons */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">Social Ecosystem</p>
                <div className="flex space-x-4 text-slate-400">
                  <SocialIcon href="https://github.com/samrith-ratana" icon={<Github size={20} />} />
                  <SocialIcon href="https://www.linkedin.com/in/samrith-ratana" icon={<Linkedin size={20} />} />
                  <SocialIcon href="https://x.com/Samrith_Ratana" icon={<Twitter size={20} />} />
                  <SocialIcon href="https://www.facebook.com/samrith.ratana.ken" icon={<Facebook size={20} />} />
                </div>
              </div>
            </div>
            
            {/* Right Side: Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only">Full name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Full name" 
                  className="w-full bg-slate-50 dark:bg-slate-800 border-transparent dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ring-blue-500/20 text-slate-900 dark:text-white placeholder:text-slate-400 transition-all focus:bg-white dark:focus:bg-slate-900 border focus:border-blue-500" 
                />
              </div>
              
              <div>
                <label className="sr-only">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Email address" 
                  className="w-full bg-slate-50 dark:bg-slate-800 border-transparent dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ring-blue-500/20 text-slate-900 dark:text-white placeholder:text-slate-400 transition-all focus:bg-white dark:focus:bg-slate-900 border focus:border-blue-500" 
                />
              </div>
              
              <div>
                <label className="sr-only">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4} 
                  placeholder="Tell me about your company..." 
                  className="w-full bg-slate-50 dark:bg-slate-800 border-transparent dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ring-blue-500/20 text-slate-900 dark:text-white placeholder:text-slate-400 transition-all focus:bg-white dark:focus:bg-slate-900 border focus:border-blue-500 resize-none" 
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

// Helper Component for consistency
function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
    >
      {icon}
    </a>
  );
}