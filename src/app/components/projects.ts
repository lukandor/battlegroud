import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <section id="projects" class="py-20 bg-secondary/30">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-text-main mb-12 text-center">Featured Projects</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of projects; track project.title) {
            <div class="group bg-secondary rounded-xl overflow-hidden border border-secondary hover:border-accent/50 transition-all duration-300 hover:-translate-y-2">
              <!-- Image Placeholder -->
              <div class="h-48 bg-primary/50 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                <div class="absolute inset-0 flex items-center justify-center text-text-muted text-4xl font-bold opacity-20 group-hover:scale-110 transition-transform duration-500">
                  {{ project.title[0] }}
                </div>
              </div>
              
              <div class="p-6">
                <h3 class="text-xl font-bold text-text-main mb-2 group-hover:text-accent transition-colors">{{ project.title }}</h3>
                <p class="text-text-muted text-sm mb-4 line-clamp-3">{{ project.description }}</p>
                
                <div class="flex flex-wrap gap-2 mb-6">
                  @for (tech of project.tech; track tech) {
                    <span class="px-2 py-1 text-xs font-medium bg-primary/50 text-accent rounded-full border border-accent/20">
                      {{ tech }}
                    </span>
                  }
                </div>
                
                <div class="flex gap-4">
                  <a href="#" class="text-text-main hover:text-accent font-medium text-sm flex items-center gap-1 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Live Demo
                  </a>
                  <a href="#" class="text-text-main hover:text-accent font-medium text-sm flex items-center gap-1 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store built with Angular and Node.js. Features include user authentication, product catalog, shopping cart, and Stripe payment integration.',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task manager allowing teams to organize projects. Real-time updates using Socket.io and a clean drag-and-drop interface.',
      tech: ['React', 'Firebase', 'Tailwind', 'DnD']
    },
    {
      title: 'Weather Dashboard',
      description: 'A sleek weather application providing real-time forecasts and historical data visualization. Uses OpenWeatherMap API and Chart.js.',
      tech: ['Vue.js', 'Chart.js', 'API Integration']
    }
  ];
}
