import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles, Terminal } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-6 md:px-12">
            {/* Background effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl -z-10 mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl -z-10 mix-blend-screen" />

            <div className="max-w-7xl mx-auto w-full flex flex-col items-start gap-8 z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-brand-400 text-sm font-medium"
                >
                    <Sparkles size={16} />
                    <span>Available for new opportunities</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="block"
                    >
                        Building digital
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="block text-transparent bg-clip-text bg-linear-to-r from-brand-400 to-accent-500"
                    >
                        experiences
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="block"
                    >
                        that matter.
                    </motion.span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl font-medium leading-relaxed"
                >
                    Full-stack developer specializing in creating exceptional web applications using Laravel, React, and modern design principles.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-wrap items-center gap-4 mt-4"
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-500/25"
                    >
                        View Projects <ArrowRight size={20} />
                    </a>

                    <div className="flex items-center gap-2 px-6 py-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm text-slate-300">
                        <Terminal size={20} className="text-brand-400" />
                        <span className="font-mono text-sm">npm start idea</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
