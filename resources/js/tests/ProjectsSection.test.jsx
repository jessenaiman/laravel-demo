import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsSection from '../Components/Sections/ProjectsSection';

// Mock external dependencies
vi.mock('lucide-react', () => ({
    ExternalLink: () => <div data-testid="icon-external" />,
    Github: () => <div data-testid="icon-github" />,
}));
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
    }
}));

const mockProjects = [
    {
        id: 1,
        title: 'Project One',
        description: 'Description of Project One',
        image_url: 'http://example.com/one.jpg',
        demo_url: 'http://demo.one',
        technologies: ['React', 'Laravel']
    }
];

describe('ProjectsSection Component', () => {
    it('renders nothing when passed no projects', () => {
        const { container } = render(<ProjectsSection projects={[]} />);
        expect(container).toBeEmptyDOMElement();
    });

    it('renders projects correctly', () => {
        render(<ProjectsSection projects={mockProjects} />);

        expect(screen.getByText(/Selected/i)).toBeInTheDocument();
        expect(screen.getByText('Project One')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
    });
});
