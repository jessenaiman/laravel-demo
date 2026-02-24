import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Layout, Smartphone } from 'lucide-react';

const skills = [
    { name: 'Frontend', icon: <Layout className="text-brand-400" />, items: ['React', 'Vue', 'Tailwind CSS', 'Next.js'] },
    { name: 'Backend', icon: <Cpu className="text-accent-500" />, items: ['Laravel', 'Node.js', 'PostgreSQL', 'Redis'] },
    { name: 'Architecture', icon: <Globe className="text-blue-400" />, items: ['REST APIs', 'GraphQL', 'Microservices', 'Docker'] },
    { name: 'Other', icon: <Smartphone className="text-pink-400" />, items: ['React Native', 'Figma', 'Git', 'CI/CD'] },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        About <span className="text-brand-500">Me</span>.
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg mb-16 leading-relaxed">
                        I'm a passionate developer who loves bridging the gap between engineering and design.
                        With a strong foundation in modern web technologies, I build scalable applications
                        that provide exceptional user experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center mb-6 border border-slate-800">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-200">{skill.name}</h3>
                            <ul className="space-y-3">
                                {skill.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
