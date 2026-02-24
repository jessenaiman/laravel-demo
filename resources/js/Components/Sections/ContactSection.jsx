import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactSection() {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Message sent successfully! (Demo)');
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-slate-900/10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Let's <span className="text-brand-500">Connect</span>.
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Have a project in mind or just want to chat? Feel free to reach out.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-8 md:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative background element inside the form card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2" />

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                    className="px-5 py-4 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="px-5 py-4 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1 flex items-center gap-2">
                                <MessageSquare size={16} />
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Tell me about your project..."
                                className="px-5 py-4 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all resize-none"
                                required
                            />
                        </div>

                        <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
                            <p className="text-brand-400 font-medium text-sm grow min-h-6">{status}</p>

                            <button
                                type="submit"
                                className="inline-flex shrink-0 items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-500/25"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
