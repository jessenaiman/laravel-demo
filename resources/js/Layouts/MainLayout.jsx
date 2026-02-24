import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function MainLayout({ children }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-brand-500 selection:text-white flex flex-col">
            {/* Header / Navbar */}
            <header
                className={cn(
                    'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
                    isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 shadow-sm py-4' : 'bg-transparent py-6'
                )}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-white z-50">
                        Portfolio<span className="text-brand-400">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 text-slate-300 hover:text-white focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-0 left-0 w-full h-screen bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40 md:hidden pb-20"
                        >
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-2xl font-semibold text-slate-200 hover:text-brand-400"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-24 md:pt-32">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-800/60 bg-slate-950 mt-20">
                <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-xl font-bold tracking-tight">Portfolio<span className="text-brand-500">.</span></span>
                        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                    </div>

                    <div className="flex items-center gap-5 text-slate-400">
                        <a href="#" className="hover:text-white transition-colors" aria-label="GitHub"><Github size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
