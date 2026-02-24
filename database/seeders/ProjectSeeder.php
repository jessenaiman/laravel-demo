<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Project;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Project::create([
            'title' => 'E-Commerce Platform',
            'description' => 'A full-stack e-commerce solution built with Laravel, React, and Stripe integration.',
            'image_url' => 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
            'demo_url' => '#',
            'github_url' => '#',
            'technologies' => ['Laravel', 'React', 'Tailwind CSS', 'Stripe'],
        ]);

        Project::create([
            'title' => 'Task Management Dashboard',
            'description' => 'A real-time task management tool with drag-and-drop kanban boards, live notifications, and team collaboration.',
            'image_url' => 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=1000&auto=format&fit=crop',
            'demo_url' => '#',
            'github_url' => '#',
            'technologies' => ['Vue.js', 'Laravel', 'WebSockets', 'MySQL'],
        ]);

        Project::create([
            'title' => 'AI Image Generator',
            'description' => 'An application utilizing OpenAI\'s DALL-E API to generate custom images based on user prompts.',
            'image_url' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
            'demo_url' => '#',
            'github_url' => '#',
            'technologies' => ['Next.js', 'Tailwind', 'OpenAI API', 'Vercel'],
        ]);
    }
}
