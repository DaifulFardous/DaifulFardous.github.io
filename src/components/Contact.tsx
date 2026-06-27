import { useState, FormEvent } from 'react';
import { Mail, Github, Linkedin, Facebook, Send, MapPin, Clock, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  if (!formState.name || !formState.email || !formState.message) return;

  setIsSubmitting(true);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "ed615587-f651-46aa-bf59-670f2df83ede", 
        name: formState.name,
        email: formState.email,
        subject: formState.subject || "New Portfolio Contact",
        message: formState.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("Connection failed. Check your network.");
  } finally {
    setIsSubmitting(false);
  }
};

  const contactDetails = [
    { label: 'Direct Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail, color: 'text-cyan-400 bg-cyan-500/5' },
    { label: 'Location', value: 'Dhaka, Bangladesh', href: null, icon: MapPin, color: 'text-blue-400 bg-blue-500/5' },
    { label: 'Average Response', value: 'Within 6 Hours', href: null, icon: Clock, color: 'text-emerald-400 bg-emerald-500/5' },
  ];

  const socials = [
    { label: 'GitHub', url: 'https://github.com/DaifulFardous', icon: Github, hoverColor: 'hover:text-[#24292e]' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/fardousoasis', icon: Linkedin, hoverColor: 'hover:text-[#0a66c2]' },
    { label: 'Facebook', url: 'https://www.facebook.com/daiful.fardous.5/', icon: Facebook, hoverColor: 'hover:text-[#1877f2]' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16" id="contact-heading">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white"
          >
            Start A Project Together
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-layout">
          
          {/* Left Panel: Direct Links */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl border border-white/5 shadow-xl flex flex-col gap-6"
            >
              <h3 className="text-xl font-bold text-white font-sans">
                Let's Build Something Exceptional
              </h3>

              {/* Detail Blocks */}
              <div className="flex flex-col gap-4 mt-2">
                {contactDetails.map((detail) => {
                  const IconComp = detail.icon;
                  const isLink = detail.href !== null;
                  const Element: any = isLink ? 'a' : 'div';
                  
                  return (
                    <Element
                      key={detail.label}
                      href={detail.href}
                      className={`p-4 rounded-xl border border-white/5 flex items-center gap-4 group transition-all ${
                        isLink ? 'hover:border-cyan-500/20 hover:bg-white/5' : ''
                      }`}
                    >
                      <div className={`p-3 rounded-lg ${detail.color} shrink-0`}>
                        <IconComp size={18} />
                      </div>
                      <div className="text-left overflow-hidden">
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                          {detail.label}
                        </p>
                        <p className={`text-xs sm:text-sm font-semibold text-slate-200 truncate ${
                          isLink ? 'group-hover:text-cyan-400 transition-colors' : ''
                        }`}>
                          {detail.value}
                        </p>
                      </div>
                    </Element>
                  );
                })}
              </div>

              {/* Social Channels */}
              <div className="border-t border-white/5 pt-6">
                <div className="flex gap-3">
                  {socials.map((social) => {
                    const SocialIcon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer text-xs font-semibold ${social.hoverColor}`}
                        title={`Visit D.S.M. Daiful Fardous Oasis on ${social.label}`}
                      >
                        <SocialIcon size={16} />
                        <span className="hidden sm:inline">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Panel: Interactive Message Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl border border-white/5 shadow-xl relative min-h-[460px] flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-5 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="form-name" className="text-xs font-mono text-slate-500 tracking-wider uppercase">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="form-name"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/5 text-slate-200 focus:border-cyan-500/40 focus:outline-none transition-colors text-sm"
                          placeholder="e.g. John Doe"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="form-email" className="text-xs font-mono text-slate-500 tracking-wider uppercase">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="form-email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/5 text-slate-200 focus:border-cyan-500/40 focus:outline-none transition-colors text-sm"
                          placeholder="e.g. john@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-subject" className="text-xs font-mono text-slate-500 tracking-wider uppercase">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="form-subject"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/5 text-slate-200 focus:border-cyan-500/40 focus:outline-none transition-colors text-sm"
                        placeholder="Project consultation, ERP setup, eCommerce inquiries..."
                      />
                    </div>

                    {/* Message body */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-message" className="text-xs font-mono text-slate-500 tracking-wider uppercase">
                        Message *
                      </label>
                      <textarea
                        id="form-message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/5 text-slate-200 focus:border-cyan-500/40 focus:outline-none transition-colors text-sm resize-none"
                        placeholder="Detail your operational or systems goal..."
                      />
                    </div>

                    {/* Send Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 mt-2 rounded-xl text-sm font-semibold tracking-wide text-white accent-gradient glow-cyan hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          Encrypting & Dispatching...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Stunning Success Toast / Card Transition */
                  <motion.div
                    key="success-toast"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center p-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                      <Check size={28} className="animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                      Message Received!
                    </h3>
                    <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed font-sans">
                      Thank you for reaching out. Your secure dispatch has been received. I will review your request and get back to you within 12 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/15 transition-all cursor-pointer uppercase"
                    >
                      Send Another Dispatch
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
