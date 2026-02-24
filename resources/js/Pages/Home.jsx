import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import HeroSection from '@/Components/Sections/HeroSection';
import AboutSection from '@/Components/Sections/AboutSection';
import ProjectsSection from '@/Components/Sections/ProjectsSection';
import ContactSection from '@/Components/Sections/ContactSection';

export default function Home({ projects }) {
    return (
        <MainLayout>
            <Head title="Portfolio | Developer & Designer" />

            <HeroSection />
            <AboutSection />
            <ProjectsSection projects={projects} />
            <ContactSection />

        </MainLayout>
    );
}
