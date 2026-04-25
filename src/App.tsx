/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, HelpCircle, Coffee, Mail, Menu, X, Github, Twitter, Linkedin, ChevronRight, Lock, CheckCircle, Smartphone, Globe, MessageSquare, Instagram, MessageCircle, Sun, Moon, Loader2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// --- Pages ---

// --- Theme Types & Context ---
type ThemeMode = 'elegant-dark' | 'cyber-brutalist' | 'minimalist-guardian' | 'tactical-intelligence' | 'light-mode';

const ThemeContext = React.createContext<{
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
}>({ theme: 'elegant-dark', setTheme: () => {} });

// --- Pages ---

const StyleSelector = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  
  const themes: { id: ThemeMode; label: string; desc: string }[] = [
    { id: 'elegant-dark', label: '1. Elegant Dark', desc: 'The sophisticated, glowing-grid look.' },
    { id: 'cyber-brutalist', label: '2. Cyber Brutalist', desc: 'Neon green, heavy borders, high-impact fonts.' },
    { id: 'minimalist-guardian', label: '3. Minimalist Guardian', desc: 'Clean, professional, trust-focused (White/Blue).' },
    { id: 'tactical-intelligence', label: '4. Tactical Intelligence', desc: 'Blueprint-style grid, technical data, serif headers.' },
    { id: 'light-mode', label: '5. Light Mode', desc: 'Clean, high-contrast light theme.' }
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center bg-black/80 backdrop-blur-xl border border-white/20 p-2 rounded-2xl shadow-2xl">
      <div className="px-4 py-2 border-r border-white/10 hidden md:block">
        <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500">Design Lab</p>
      </div>
      <div className="flex gap-1 p-1">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${theme === t.id ? 'bg-white text-black shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            {t.id.split('-').map(w => w[0]).join('').toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const { theme } = React.useContext(ThemeContext);

  // Dynamic Styles based on Theme
  const themeStyles = {
    'elegant-dark': {
      wrapper: "tech-grid",
      heroBtn: "bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]",
      heading: "font-light text-white italic",
      accent: "accent-cyan font-bold"
    },
    'cyber-brutalist': {
      wrapper: "bg-black border-8 border-lime-500 m-4",
      heroBtn: "bg-lime-500 text-black border-4 border-black hover:bg-white transition-none uppercase tracking-tighter",
      heading: "font-black text-white uppercase text-8xl md:text-9xl",
      accent: "text-lime-500"
    },
    'minimalist-guardian': {
      wrapper: "bg-white text-slate-900 shadow-inner",
      heroBtn: "bg-[#0055FF] text-white hover:bg-blue-600 rounded-full shadow-xl shadow-blue-500/20",
      heading: "font-semibold text-slate-900 tracking-tight",
      accent: "text-blue-600"
    },
    'light-mode': {
      wrapper: "bg-slate-50 text-slate-900",
      heroBtn: "bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg",
      heading: "font-bold text-slate-900",
      accent: "text-cyan-600"
    },
    'tactical-intelligence': {
      wrapper: "bg-[#0a0f1a] relative after:absolute after:inset-0 after:bg-[linear-gradient(rgba(0,0,0,0)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0)_1px,transparent_1px)] after:bg-[size:100px_100px] after:pointer-events-none",
      heroBtn: "bg-transparent border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono text-xs uppercase",
      heading: "font-serif italic text-white",
      accent: "text-cyan-500 not-italic font-mono text-4xl"
    }
  }[theme];

  return (
    <div className={`space-y-24 pb-20 transition-colors duration-500 ${themeStyles.wrapper}`}>
      {/* Hero Section */}
      <section id="home-hero" className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-7"
            >
              <p className={`label-caps mb-6 ${theme === 'minimalist-guardian' ? 'text-blue-500' : ''}`}>Sybix Secure | Intelligence & Protection</p>
              <h1 className={`text-6xl md:text-8xl tracking-tighter leading-[0.9] mb-8 ${themeStyles.heading}`}>
                Your safety is <br />
                <span className={themeStyles.accent}>our priority.</span>
              </h1>
              <p className={`text-lg leading-relaxed mb-10 max-w-xl ${theme === 'minimalist-guardian' ? 'text-slate-600' : 'text-slate-400'}`}>
                Expert-led cybersecurity for the everyday user. We strip away the jargon to provide actionable defense strategies against modern threats.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/how-we-help" className={`px-8 py-4 rounded-xl transition-all flex items-center group ${themeStyles.heroBtn}`}>
                  Explore Services
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link to="/contact" className={`px-8 py-4 rounded-xl font-semibold transition-all ${theme === 'minimalist-guardian' ? 'border border-slate-200 text-slate-900 hover:bg-slate-50' : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'}`}>
                  Contact Experts
                </Link>
              </div>
            </motion.div>
            
            {theme !== 'cyber-brutalist' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hidden md:block col-span-5"
              >
                <div className={`glass-card p-8 border-cyan-500/20 bg-cyan-900/5 relative overflow-hidden group`}>
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                  <div className="flex justify-between items-center mb-6">
                    <p className="label-caps !mb-0">Tactical Intelligence</p>
                    <div className="flex items-center gap-2 text-[10px] text-cyan-500 font-mono">
                      <PulsingStatus color="bg-cyan-500" />
                      LIVE_FEED
                    </div>
                  </div>
                  <div className="space-y-6">
                    {[
                      { 
                        label: "Compromised accounts recovery", 
                        value: "68.4%", 
                        color: "text-cyan-400", 
                        graph: "stroke-cyan-400",
                        points: [10, 25, 15, 30, 25, 20, 35, 20, 30],
                        delay: 0
                      },
                      { 
                        label: "Unauthorised Content removal", 
                        value: "ACTIVE", 
                        color: "text-emerald-400", 
                        graph: "stroke-emerald-400",
                        points: [25, 28, 22, 25, 30, 27, 35, 32, 38],
                        delay: 0.8
                      },
                      { 
                        label: "Blackmailers & Bully", 
                        value: "MEDIUM", 
                        color: "text-blue-400", 
                        graph: "stroke-blue-400",
                        points: [20, 10, 25, 18, 30, 22, 15, 25, 12],
                        delay: 1.6
                      }
                    ].map((stat, i) => (
                      <div key={i} className={`flex flex-col gap-2 border-b border-white/5 pb-4 group/stat`}>
                        <div className="flex justify-between items-center">
                          <span className="text-xs uppercase tracking-widest opacity-40 group-hover/stat:opacity-80 transition-opacity">{stat.label}</span>
                          <span className={`text-lg font-bold font-mono ${stat.color}`}>{stat.value}</span>
                        </div>
                        <div className="flex justify-between items-center h-8">
                          <MiniGraph color={stat.graph} points={stat.points} delay={stat.delay} />
                          <div className="text-[10px] text-slate-500 font-mono flex gap-3">
                            <span>BUFF::SYNC</span>
                            <span className="animate-pulse">17ms</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        
        {theme === 'cyber-brutalist' && (
          <div className="absolute top-0 right-0 h-full w-24 bg-lime-500 flex items-center justify-center overflow-hidden">
            <p className="writing-mode-vertical text-black font-black text-6xl tracking-tighter uppercase whitespace-nowrap animate-pulse">SYSTEM_ACTIVE</p>
          </div>
        )}
      </section>

      {/* Services Snippet */}
      <section className="container mx-auto px-6">
        <p className="label-caps text-center mb-12">Core Capabilities</p>
        <div className="grid md:grid-cols-3 gap-6">
          {["Phishing Defense", "Malware Recovery", "Privacy Shield"].map((service, i) => (
            <div key={i} className={`p-12 transition-all ${theme === 'minimalist-guardian' ? 'bg-slate-50 rounded-[2rem]' : 'glass-card hover:border-cyan-500/50'}`}>
              <Shield className={`mb-6 ${theme === 'cyber-brutalist' ? 'text-lime-500 scale-150' : 'accent-cyan'}`} size={32} />
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'minimalist-guardian' ? 'text-slate-900' : 'text-white'}`}>{service}</h3>
              <p className={`text-sm leading-relaxed ${theme === 'minimalist-guardian' ? 'text-slate-500' : 'text-slate-400'}`}>Detailed intelligence and actionable protection protocols for your digital assets.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="container mx-auto px-6 py-20 relative">
        <div className={`p-12 rounded-[2rem] overflow-hidden relative ${theme === 'minimalist-guardian' ? 'bg-blue-600 text-white' : 'glass-card border-cyan-500/30'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <p className={`label-caps mb-4 ${theme === 'minimalist-guardian' ? 'text-blue-100' : 'accent-cyan'}`}>Community & Updates</p>
              <h2 className="text-4xl font-bold mb-6">Join our Intelligence <br /> <span className="italic font-light">Network.</span></h2>
              <p className={`mb-10 text-lg ${theme === 'minimalist-guardian' ? 'text-white/80' : 'text-slate-400'}`}>Stay ahead of threats with daily updates in our community and official handles.</p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://chat.whatsapp.com/DJVT6alhymlFU6MAdZgjSR" target="_blank" rel="noopener noreferrer" className={`px-6 py-3 rounded-xl flex items-center gap-3 font-bold transition-all ${theme === 'minimalist-guardian' ? 'bg-white text-blue-600 hover:bg-slate-100' : 'bg-green-500 text-black hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.2)]'}`}>
                  <MessageCircle size={20} />
                  Join WhatsApp
                </a>
                <a href="https://www.instagram.com/sybixsecure?igsh=czF1emx2bTRhM2tl" target="_blank" rel="noopener noreferrer" className={`px-6 py-3 rounded-xl flex items-center gap-3 font-bold transition-all ${theme === 'minimalist-guardian' ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                  <Instagram size={20} />
                  Follow Instagram
                </a>
                <a href="https://www.linkedin.com/company/sybix-secure/" target="_blank" rel="noopener noreferrer" className={`px-6 py-3 rounded-xl flex items-center gap-3 font-bold transition-all ${theme === 'minimalist-guardian' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                  <Linkedin size={20} />
                  Connect LinkedIn
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className={`w-64 h-64 rounded-full border flex items-center justify-center relative ${theme === 'minimalist-guardian' ? 'border-white/20' : 'border-cyan-500/20 shadow-[0_0_50px_rgba(34,211,238,0.1)]'}`}>
                <div className={`w-48 h-48 rounded-full border flex items-center justify-center relative ${theme === 'minimalist-guardian' ? 'border-white/40' : 'border-cyan-500/40 shadow-[0_0_30px_rgba(34,211,238,0.1)]'}`}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20"
                  />
                  <img 
                    src="/logo.jpeg" 
                    alt="Sybix Logo" 
                    referrerPolicy="no-referrer"
                    className="w-32 h-32 rounded-full object-cover relative z-10 border border-white/10" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decorative element */}
          <div className={`absolute -right-20 -bottom-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${theme === 'minimalist-guardian' ? 'bg-white' : 'bg-cyan-500'}`}></div>
        </div>
      </section>
    </div>
  );
};

const HowWeHelp = () => {
  const { theme } = React.useContext(ThemeContext);
  const isLight = theme === 'light-mode' || theme === 'minimalist-guardian';

  return (
    <div className={`pt-32 pb-20 container mx-auto px-6 ${isLight ? '' : 'tech-grid'} transition-colors duration-500`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <p className="label-caps mb-4">Defense Services</p>
        <h1 className={`text-5xl font-light mb-6 italic ${isLight ? 'text-slate-900' : 'text-white'}`}>Secure <span className="font-bold accent-cyan">Infrastructure.</span></h1>
        <p className={`text-xl font-light ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Comprehensive security services tailored for individuals and families. No jargon, just results.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: <Shield size={24} />,
            title: "Malware Remediation",
            desc: "Step-by-step cleanup guides for infected systems and direct assistance to clean your devices."
          },
          {
            icon: <Globe size={24} />,
            title: "Phishing Detection",
            desc: "Advanced heuristics to identify malicious communication and learn how to spot malicious links."
          },
          {
            icon: <Smartphone size={24} />,
            title: "Privacy Optimization",
            desc: "Lock down your digital footprint across social platforms with simple settings adjustments."
          },
          {
            icon: <MessageSquare size={24} />,
            title: "24/7 Support Wing",
            desc: "Immediate assistance for critical security breaches. Our team is always online to help."
          },
          {
            icon: <CheckCircle size={24} />,
            title: "Safety Guides",
            desc: "Curated, easy-to-read guides on everything from password managers to safe browsing."
          },
          {
            icon: <Lock size={24} />,
            title: "Identity Protection",
            desc: "Monitored solutions and preventative advice to keep your personal ID secure."
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`${isLight ? 'bg-white border-slate-200' : 'glass-card border-white/10'} p-6 rounded-2xl border hover:border-cyan-500/50 transition-all cursor-default group`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-lg accent-cyan transition-colors ${isLight ? 'bg-slate-100 group-hover:bg-cyan-50' : 'bg-white/5 group-hover:bg-cyan-500/10'}`}>{item.icon}</div>
              <ChevronRight className="accent-cyan opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>{item.title}</h3>
            <p className={`text-sm leading-relaxed font-light ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CoffeePage = () => {
  const { theme } = React.useContext(ThemeContext);
  const isLight = theme === 'light-mode' || theme === 'minimalist-guardian';
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleDonate = async (idx: number, amountStr: string) => {
    setLoadingId(idx);
    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoadingId(null);
  };

  return (
    <div className={`pt-32 pb-20 container mx-auto px-6 ${isLight ? '' : 'tech-grid'} transition-colors duration-500`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`mb-8 inline-block p-4 rounded-full border accent-cyan ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-white/5 border-white/10'}`}
        >
          <Coffee size={40} />
        </motion.div>
        
        <p className="label-caps mb-4">Support our mission</p>
        <h1 className={`text-5xl font-bold mb-6 ${isLight ? 'text-slate-900' : 'text-white'}`}>Fuel our <span className="accent-cyan">Research.</span></h1>
        <p className={`text-xl mb-12 font-light ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
          Donations keep our advice free and accessible to everyone. Buy us a coffee to support the cause and help us maintain our global protection nodes.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { amount: "₹50", label: "A Quick Espresso", text: "Covers hosting for 1 day." },
            { amount: "₹250", label: "A Large Latte", text: "Helps us research a new tutorial.", featured: true },
            { amount: "₹500", label: "Whole Bean Bag", text: "Supports our 24/7 support team." }
          ].map((tier, idx) => (
            <div key={idx} className={`p-8 transition-all rounded-2xl border ${tier.featured ? 'border-cyan-500/50 bg-cyan-500/5 scale-105 shadow-xl shadow-cyan-500/5' : (isLight ? 'bg-white border-slate-200' : 'glass-card border-white/10')}`}>
              <div className={`text-4xl font-bold mb-2 font-mono ${isLight ? 'text-slate-900' : 'text-white'}`}>{tier.amount}</div>
              <div className="text-sm label-caps mb-6">{tier.label}</div>
              <p className={`mb-8 text-sm font-light leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{tier.text}</p>
              <button 
                id={`donate-btn-${idx}`} 
                disabled={loadingId !== null}
                onClick={() => handleDonate(idx, tier.amount)}
                className={`w-full py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${tier.featured ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]' : (isLight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10')} disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {loadingId === idx ? <Loader2 className="animate-spin" size={18} /> : '☕ Donate'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const { theme } = React.useContext(ThemeContext);
  const isLight = theme === 'light-mode' || theme === 'minimalist-guardian';
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.querySelector('#contact-name') as HTMLInputElement).value,
      email: (form.querySelector('#contact-email') as HTMLInputElement).value,
      message: (form.querySelector('#contact-message') as HTMLTextAreaElement).value
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Transmission failed:", error);
      // Fallback for demo purposes if backend isn't ready
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`pt-32 pb-20 container mx-auto px-6 ${isLight ? '' : 'tech-grid'} transition-colors duration-500`}>
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <p className="label-caps mb-4">Secure Inquiry</p>
          <h1 className={`text-5xl font-bold mb-8 ${isLight ? 'text-slate-900' : 'text-white'}`}>Transmit <span className="accent-cyan font-light italic">Request.</span></h1>
          <p className={`text-xl mb-12 leading-relaxed font-light ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Have a question? Spotted a scam? Reach out using our secure channels. Anonymous queries are fully accepted and treated with the same priority.
          </p>
          
          <div className="space-y-6">
            <div className={`flex items-center space-x-6 p-4 rounded-2xl border ${isLight ? 'bg-white border-slate-200' : 'glass-card border-white/10'}`}>
              <div className={`p-3 rounded-lg accent-cyan ${isLight ? 'bg-slate-100' : 'bg-white/5'}`}>
                <Mail size={20} />
              </div>
              <div>
                <p className="label-caps mb-1 opacity-60">System Email</p>
                <p className={`font-mono text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>sybixcybercare@gmail.com</p>
              </div>
            </div>
            <div className={`flex items-center space-x-6 p-4 rounded-2xl border ${isLight ? 'bg-white border-slate-200' : 'glass-card border-white/10'}`}>
              <div className={`p-3 rounded-lg text-emerald-500 ${isLight ? 'bg-slate-100' : 'bg-white/5'}`}>
                <Shield size={20} />
              </div>
              <div>
                <p className="label-caps mb-1 opacity-60">Encrypted Channel</p>
                <p className={`font-mono text-xs ${isLight ? 'text-slate-900' : 'text-white'}`}>Coming soon !!</p>
              </div>
            </div>

            <div className={`pt-8 border-t ${isLight ? 'border-slate-200' : 'border-white/5'}`}>
              <p className="label-caps mb-6 opacity-60">Fast-Track Channels</p>
              <div className="grid grid-cols-1 gap-4">
                <a href="https://www.instagram.com/sybixcybercare?igsh=b3E4OGYwYjR0cDVs" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-6 p-4 rounded-2xl border transition-all group ${isLight ? 'bg-white border-slate-200 hover:border-cyan-500/50' : 'glass-card border-white/10 hover:border-cyan-500/50'}`}>
                  <div className={`p-3 rounded-lg text-pink-500 transition-colors ${isLight ? 'bg-slate-100 group-hover:bg-pink-50' : 'bg-white/5 group-hover:bg-pink-500/10'}`}>
                    <Instagram size={20} />
                  </div>
                  <div>
                    <p className="label-caps mb-1 opacity-60">Report Complaints</p>
                    <p className={`font-mono text-xs ${isLight ? 'text-slate-900' : 'text-white'}`}>@sybixcybercare</p>
                  </div>
                </a>
                <a href="https://chat.whatsapp.com/DJVT6alhymlFU6MAdZgjSR" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-6 p-4 rounded-2xl border transition-all group ${isLight ? 'bg-white border-slate-200 hover:border-cyan-500/50' : 'glass-card border-white/10 hover:border-cyan-500/50'}`}>
                  <div className={`p-3 rounded-lg text-green-500 transition-colors ${isLight ? 'bg-slate-100 group-hover:bg-green-50' : 'bg-white/5 group-hover:bg-green-500/10'}`}>
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="label-caps mb-1 opacity-60">WhatsApp Community</p>
                    <p className={`font-mono text-xs ${isLight ? 'text-slate-900' : 'text-white'}`}>Daily Intelligence Updates</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/sybix-secure/" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-6 p-4 rounded-2xl border transition-all group ${isLight ? 'bg-white border-slate-200 hover:border-cyan-500/50' : 'glass-card border-white/10 hover:border-cyan-500/50'}`}>
                  <div className={`p-3 rounded-lg text-blue-500 transition-colors ${isLight ? 'bg-slate-100 group-hover:bg-blue-50' : 'bg-white/5 group-hover:bg-blue-500/10'}`}>
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="label-caps mb-1 opacity-60">Professional Profile</p>
                    <p className={`font-mono text-xs ${isLight ? 'text-slate-900' : 'text-white'}`}>LinkedIn Sybix Secure</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`p-8 rounded-2xl border ${isLight ? 'bg-white border-slate-200 shadow-xl' : 'glass-card border-white/10'}`}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <div>
                  <label className="label-caps mb-2 block">Alias or Name</label>
                  <input id="contact-name" type="text" required className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-sm ${isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-black/40 border-white/10 text-white'}`} placeholder="Anonymous" />
                </div>
                <div>
                  <label className="label-caps mb-2 block">Secure Email</label>
                  <input id="contact-email" type="email" required className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-sm ${isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-black/40 border-white/10 text-white'}`} placeholder="user@encrypted.net" />
                </div>
                <div>
                  <label className="label-caps mb-2 block">Message</label>
                  <textarea id="contact-message" rows={4} required className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none text-sm ${isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-black/40 border-white/10 text-white'}`} placeholder="How can we help?"></textarea>
                </div>
                <button 
                  type="submit" 
                  id="contact-submit" 
                  disabled={loading}
                  className={`w-full py-3 border border-cyan-500/50 text-cyan-500 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-cyan-500/10 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {loading ? <Loader2 className="animate-spin" size={16} /> : 'Send Transmission'}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="accent-cyan mb-4 flex justify-center">
                  <CheckCircle size={48} />
                </div>
                <p className="label-caps mb-2">Transmission Successful</p>
                <h3 className={`text-xl font-bold mb-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>Request Logged.</h3>
                <p className={`text-sm font-light ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Our intelligence team will review and respond shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-cyan-500 text-xs font-bold uppercase tracking-widest hover:underline cursor-pointer">Repeat Transmission</button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

// --- Components ---

const MiniGraph = ({ color = "stroke-cyan-500", points = [20, 15, 30, 25, 40, 35, 50, 45, 60, 55, 70], delay = 0 }: { color?: string; points?: number[]; delay?: number }) => {
  return (
    <div className="w-24 h-8 overflow-hidden opacity-50 relative group-hover:opacity-100 transition-opacity">
      <svg viewBox="0 0 100 40" className="w-full h-full">
        <motion.polyline
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className={color}
          points={points.map((p, i) => `${i * (100 / (points.length - 1))},${40 - p}`).join(' ')}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay }}
        />
        <motion.polyline
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className={`${color} blur-[2px]`}
          points={points.map((p, i) => `${i * (100 / (points.length - 1))},${40 - p}`).join(' ')}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay }}
        />
      </svg>
    </div>
  );
};

const PulsingStatus = ({ color = "bg-green-500" }: { color?: string }) => (
  <div className="relative flex items-center justify-center w-3 h-3">
    <div className={`absolute inset-[-4px] rounded-full ${color.replace('bg-', 'border-')} border animate-ping opacity-40`}></div>
    <div className={`w-2 h-2 rounded-full ${color} shadow-[0_0_8px_rgba(34,211,238,0.5)]`}></div>
  </div>
);

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)
      );
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Outer Ring */}
      <motion.div
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isPointer ? 1.5 : 1,
          borderColor: isPointer ? '#22D3EE' : 'rgba(34, 211, 238, 0.3)'
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
        className="w-10 h-10 border-2 rounded-full absolute"
      />
      {/* Inner Dot */}
      <motion.div
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: isPointer ? 0.5 : 1,
          backgroundColor: '#22D3EE'
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.2 }}
        className="w-2 h-2 rounded-full absolute shadow-[0_0_10px_rgba(34,211,238,0.8)]"
      >
        <div className="absolute inset-[-4px] border border-cyan-500/50 rounded-full animate-ping opacity-20"></div>
      </motion.div>
      {/* Glitch Coordinates */}
      <motion.div
        animate={{
          x: mousePos.x + 20,
          y: mousePos.y + 20
        }}
        className="absolute text-[8px] font-mono text-cyan-500/50 flex flex-col uppercase"
      >
        <span>X: {Math.round(mousePos.x)}</span>
        <span>Y: {Math.round(mousePos.y)}</span>
      </motion.div>
    </div>
  );
};

const BackgroundEffects = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Animated Scanning Line */}
    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan shadow-[0_0_15px_rgba(34,211,238,0.8)] opacity-60"></div>
    
    {/* High-Contrast Floating Data Nodes */}
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ["0vh", "100vh"],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5
          }}
          className="absolute w-[2px] h-[150px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
          style={{
            left: `${(i * 9) % 100}%`,
            top: `-200px`
          }}
        />
      ))}
    </div>

    {/* Bright Pulsing Orbs */}
    <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
    <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>
    
    {/* High-visibility Code Glitch */}
    <div className="absolute top-1/2 left-1/4 opacity-10 font-mono text-[8px] text-cyan-500 pointer-events-none select-none animate-pulse">
      <pre>{`SYBIX_ENCRYPTION_LAYER_ACTIVE\nSECURE_CHANNEL_READY\nNODE_01: ONLINE`}</pre>
    </div>

    {/* Subtle Watermark */}
    <div className="absolute bottom-10 left-10 opacity-[0.03] pointer-events-none select-none hidden lg:block">
      <p className="text-4xl font-bold tracking-widest uppercase text-white">Sybix Secure</p>
    </div>
    
    {/* Static Glowing Grid Accent */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_70%)]"></div>
  </div>
);

// --- Main Layout ---

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [systemOnline, setSystemOnline] = useState(false);
  const location = useLocation();

  const isLight = theme === 'light-mode' || theme === 'minimalist-guardian';

  useEffect(() => {
    const checkSystem = async () => {
      try {
        const res = await fetch('/api/health');
        if (res.ok) setSystemOnline(true);
      } catch (e) {
        setSystemOnline(false);
      }
    };
    checkSystem();
    const interval = setInterval(checkSystem, 30000); // Check every 30s
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const toggleTheme = () => {
    setTheme(theme === 'elegant-dark' ? 'light-mode' : 'elegant-dark');
  };

  const navLinks = [
    { to: '/', label: 'Overview' },
    { to: '/how-we-help', label: 'Intelligence' },
    { to: '/coffee', label: 'Donate' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isLight ? 'bg-white text-slate-900' : 'bg-bg-dark text-slate-200'} font-sans selection:bg-cyan-500/30 selection:text-cyan-400 overflow-x-hidden`}>
      <CustomCursor />
      {!isLight && <BackgroundEffects />}
      {/* Header */}
      <nav id="main-nav" className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? (isLight ? 'bg-white/90 shadow-md border-b border-slate-200' : 'bg-bg-dark/90 border-b border-white/5 shadow-2xl') + ' backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" id="nav-logo" className="flex items-center space-x-3 group">
            <div className={`p-1.5 rounded-full border transition-all ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/5 border-white/10 group-hover:border-cyan-500/50'}`}>
              <img src="/logo.jpeg" alt="Sybix Secure Logo" referrerPolicy="no-referrer" className="h-8 w-8 rounded-full object-cover group-hover:scale-110 transition-transform" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold tracking-tight uppercase leading-none ${isLight ? 'text-slate-900' : 'text-white'}`}>Sybix<span className="accent-cyan">Secure</span></h1>
              <p className="label-caps text-[8px]">Intelligence & Protection</p>
            </div>
          </Link>

          {/* Theme Toggle & Desktop Nav */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  id={`nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  className={`text-sm font-medium transition-all ${location.pathname === link.to ? (isLight ? 'text-cyan-600' : 'accent-cyan') : (isLight ? 'text-slate-500 hover:text-slate-900' : 'text-slate-400 hover:text-white')}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" id="nav-cta" className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${isLight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                Contact Experts
              </Link>
            </div>
            
            {/* Theme Switch Toggle */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all ${isLight ? 'bg-slate-100 text-slate-900 hover:bg-slate-200' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
              aria-label="Toggle Theme"
            >
              {isLight ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile Toggle */}
            <button id="mobile-menu-toggle" className={`md:hidden cursor-pointer ${isLight ? 'text-slate-900' : 'text-white'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`fixed inset-0 z-40 pt-32 px-6 transition-colors duration-500 ${isLight ? 'bg-white' : 'bg-bg-dark tech-grid'}`}
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  id={`mobile-nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  className={`text-6xl font-light italic ${location.pathname === link.to ? 'accent-cyan' : (isLight ? 'text-slate-900' : 'text-white')}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className={`text-4xl font-bold accent-cyan border-t pt-8 ${isLight ? 'border-slate-200' : 'border-white/5'}`}>Get Expert Support</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 pt-20">{children}</main>

      {/* Footer */}
      <footer id="main-footer" className={`border-t pt-20 pb-10 transition-colors duration-500 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-bg-dark border-white/5'}`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <Link to="/" className="flex items-center space-x-4 mb-6 group">
                <div className={`p-2 rounded-full border ${isLight ? 'bg-white border-slate-200' : 'bg-white/5 border-white/10 shadow-[0_0_20px_rgba(34,211,238,0.1)]'}`}>
                  <img src="/logo.jpeg" alt="Sybix Secure Logo" referrerPolicy="no-referrer" className="h-12 w-12 rounded-full object-cover" />
                </div>
                <span className={`text-2xl font-bold tracking-tight uppercase ${isLight ? 'text-slate-900' : 'text-white'}`}>Sybix<span className="accent-cyan">Secure</span></span>
              </Link>
              <p className="text-slate-500 max-w-sm mb-8 leading-relaxed font-light text-sm">
                Shielding the digital world, one user at a time. Expert-led cybersecurity for the everyday user.
              </p>
              <div className="flex space-x-6 text-slate-500 text-xs text-xs font-bold uppercase tracking-widest">
                <a href="https://www.instagram.com/sybixcybercare?igsh=MWpxYXRmMDIybjFkMw==" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">Insta</a>
                <a href="https://chat.whatsapp.com/DJVT6alhymlFU6MAdZgjSR" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">WhatsApp</a>
                <a href="https://www.linkedin.com/company/sybix-secure/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">LinkedIn</a>
              </div>
            </div>
            <div>
              <p className="label-caps mb-6">Information</p>
              <ul className={`space-y-3 text-sm transition-colors ${isLight ? 'text-slate-600' : 'text-slate-500'}`}>
                <li><Link to="/" className={`transition-colors ${isLight ? 'hover:text-cyan-600' : 'hover:text-white'}`}>Overview</Link></li>
                <li><Link to="/how-we-help" className={`transition-colors ${isLight ? 'hover:text-cyan-600' : 'hover:text-white'}`}>Intelligence</Link></li>
                <li><Link to="/coffee" className={`transition-colors ${isLight ? 'hover:text-cyan-600' : 'hover:text-white'}`}>Donate</Link></li>
                <li><Link to="/contact" className={`transition-colors ${isLight ? 'hover:text-cyan-600' : 'hover:text-white'}`}>Expert Support</Link></li>
              </ul>
            </div>
            <div className={`p-6 rounded-2xl border transition-colors ${isLight ? 'bg-white border-slate-200' : 'glass-card border-white/5'}`}>
              <p className="label-caps mb-4">System Status</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] text-slate-500">
                  <div className={`w-2 h-2 rounded-full ${systemOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'} `}></div>
                  {systemOnline ? 'Nodes Online' : 'System Offline'}
                </div>
                <div className="text-[10px] text-slate-500">Active Scans: 628</div>
                <div className="text-[10px] text-slate-400 font-mono">PGP: Coming Soon !</div>
              </div>
            </div>
          </div>
          <div className={`border-t pt-8 flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest ${isLight ? 'border-slate-200' : 'border-white/5'}`}>
            <p>&copy; {new Date().getFullYear()} Sybix Secure</p>
            <p>Shield Mode: Active</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('elegant-dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-we-help" element={<HowWeHelp />} />
            <Route path="/coffee" element={<CoffeePage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeContext.Provider>
  );
}
