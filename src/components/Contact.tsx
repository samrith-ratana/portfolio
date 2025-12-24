import { Github, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-6xl font-extrabold tracking-tight sticky top-32 text-slate-900 dark:text-white">
            Contact
            <div className="h-1.5 w-[70px] bg-blue-300 mt-2 rounded-full"></div>
          </h2>
        </div>
        <div className="md:col-span-2 pl-0 md:pl-12">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-10 grid md:grid-cols-2 gap-12 shadow-sm">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Let's connect</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
                Available for full-time roles and backend system consultations.
              </p>
              <ul className="space-y-4 mb-8 text-slate-900 dark:text-slate-200">
                <li className="flex items-center gap-3 text-sm font-bold">
                  📧 <span className="hover:text-blue-600 transition cursor-pointer">samrithratana@outlook.com</span>
                </li>
                <li className="flex items-center gap-3 text-sm font-bold">
                  📞 <span>(+855) 96 622 6109</span>
                </li>
              </ul>
              
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">Social Ecosystem</p>
                <div className="flex space-x-5 text-slate-400">
                  <SocialIcon href="https://github.com/samrith-ratana" icon={<Github size={20} />} />
                  <SocialIcon href="https://www.linkedin.com/in/samrith-ratana" icon={<Linkedin size={20} />} />
                  <SocialIcon href="https://x.com/samrith_ratana" icon={<Twitter size={20} />} />
                  <SocialIcon href="https://www.facebook.com/samrith.ratana.ken" icon={<Facebook size={20} />} />
                </div>
              </div>
            </div>
            
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Full name" 
                className="w-full bg-slate-50 dark:bg-slate-800 border-transparent dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ring-blue-500/20 text-slate-900 dark:text-white placeholder:text-slate-400" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-slate-50 dark:bg-slate-800 border-transparent dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ring-blue-500/20 text-slate-900 dark:text-white placeholder:text-slate-400" 
              />
              <textarea 
                rows={4} 
                placeholder="Message" 
                className="w-full bg-slate-50 dark:bg-slate-800 border-transparent dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ring-blue-500/20 text-slate-900 dark:text-white placeholder:text-slate-400" 
              />
              <button 
                type="button"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
      {icon}
    </a>
  );
}