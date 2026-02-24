<?php

namespace Tests\Feature;

use App\Models\Project;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class ProjectControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_home_page_renders_with_projects(): void
    {
        $project = Project::create([
            'title' => 'Test Project',
            'description' => 'Test Description',
            'technologies' => ['PHP', 'Laravel']
        ]);

        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => $page
            ->component('Home')
            ->has('projects', 1)
            ->where('projects.0.title', 'Test Project')
        );
    }
}
