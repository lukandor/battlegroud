import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <section id="skills" class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-text-main mb-12 text-center">Skills & Expertise</h2>

        <div class="grid md:grid-cols-3 gap-8">
          @for (category of skillCategories; track category.name) {
            <div class="bg-secondary/50 p-6 rounded-xl border border-secondary hover:border-accent/30 transition-all duration-300">
              <h3 class="text-xl font-bold text-accent mb-6">{{ category.name }}</h3>
              <div class="space-y-4">
                @for (skill of category.skills; track skill.name) {
                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-text-main font-medium">{{ skill.name }}</span>
                      <span class="text-text-muted text-sm">{{ skill.level }}%</span>
                    </div>
                    <div class="w-full bg-primary rounded-full h-2.5">
                      <div class="bg-accent h-2.5 rounded-full transition-all duration-1000" [style.width.%]="skill.level"></div>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 95 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      name: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 65 },
        { name: 'CI/CD', level: 80 }
      ]
    }
  ];
}
