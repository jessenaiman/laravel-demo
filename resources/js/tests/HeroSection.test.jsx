import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSection from '../Components/Sections/HeroSection';

// Mock Lucide icons
vi.mock('lucide-react', () => ({
    ArrowRight: () => <div data-testid="icon-arrow" />,
    Sparkles: () => <div data-testid="icon-sparkles" />,
    Terminal: () => <div data-testid="icon-terminal" />,
}));

// Mock framer-motion to render normally in tests
vi.mock('framer-motion', () => {
    const ActualFramerMotion = vi.importActual('framer-motion');
    return {
        ...ActualFramerMotion,
        motion: {
            div: ({ children, ...props }) => <div {...props}>{children}</div>,
            span: ({ children, ...props }) => <span {...props}>{children}</span>,
            p: ({ children, ...props }) => <p {...props}>{children}</p>,
        },
    };
});

describe('HeroSection Component', () => {
    it('renders the main heading correctly', () => {
        render(<HeroSection />);
        expect(screen.getByText(/Building/i)).toBeInTheDocument();
        expect(screen.getByText(/experiences/i)).toBeInTheDocument();
    });

    it('displays the call to action button', () => {
        render(<HeroSection />);
        const link = screen.getByRole('link', { name: /View Projects/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '#projects');
    });
});
