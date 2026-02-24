import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection({ projects }) {
    if (!projects || projects.length === 0) return null;

    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-slate-950 relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Selected <span className="text-accent-500">Work</span>.
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        A showcase of my recent projects, demonstrating my expertise in building robust and scalable applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative flex flex-col rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-slate-700 transition-colors"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
                                {project.image_url ? (
                                    <img
                                        src={project.image_url}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-500">
                                        No image available
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
                            </div>

                            {/* Content */}
                            <div className="relative p-8 flex flex-col grow">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 line-clamp-3 mb-6 grow">
                                    {project.description}
                                </p>

                                {/* Technologies Tags */}
                                {project.technologies && (
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.technologies.map(tech => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-full border border-slate-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Links */}
                                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-800/60">
                                    {project.demo_url && (
                                        <a
                                            href={project.demo_url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-400 transition-colors"
                                        >
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    )}
                                    {project.github_url && (
                                        <a
                                            href={project.github_url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors ml-auto"
                                        >
                                            <Github size={18} /> Source
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
