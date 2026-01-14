import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="py-20 bg-secondary/30">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-text-main mb-12 text-center">About Me</h2>
        
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Biography -->
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-accent">Biography</h3>
            <p class="text-text-muted leading-relaxed">
              I am a dedicated Software Engineer with a passion for building scalable and efficient applications.
              My journey started with a curiosity for how things work on the web, which led me to dive deep into
              full-stack development.
            </p>
            <p class="text-text-muted leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source, 
              and solving complex algorithmic problems. I believe in continuous learning and adapting 
              to the ever-evolving tech landscape.
            </p>
            
            <div class="grid grid-cols-2 gap-4 pt-4">
              <div class="p-4 bg-secondary rounded-lg border border-secondary hover:border-accent/50 transition-colors">
                <span class="block text-3xl font-bold text-accent">3+</span>
                <span class="text-sm text-text-muted">Years Experience</span>
              </div>
              <div class="p-4 bg-secondary rounded-lg border border-secondary hover:border-accent/50 transition-colors">
                <span class="block text-3xl font-bold text-accent">20+</span>
                <span class="text-sm text-text-muted">Projects Completed</span>
              </div>
            </div>
          </div>

          <!-- Timeline / Education -->
          <div class="space-y-8">
             <h3 class="text-2xl font-bold text-accent">Experience & Education</h3>
             
             <div class="relative border-l border-text-muted/30 ml-3 space-y-8">
               <!-- Item 1 -->
               <div class="ml-6 relative">
                 <span class="absolute -left-[31px] flex h-4 w-4 bg-accent rounded-full ring-4 ring-primary"></span>
                 <h4 class="text-xl font-bold text-text-main">Software Engineer</h4>
                 <span class="text-sm text-accent">2023 - Present</span>
                 <p class="text-text-muted mt-2">Developing robust web applications and microservices architecture.</p>
               </div>
               
               <!-- Item 2 -->
               <div class="ml-6 relative">
                 <span class="absolute -left-[31px] flex h-4 w-4 bg-text-muted rounded-full ring-4 ring-primary"></span>
                 <h4 class="text-xl font-bold text-text-main">Junior Developer</h4>
                 <span class="text-sm text-accent">2021 - 2023</span>
                 <p class="text-text-muted mt-2">Assisted in frontend development and API integration.</p>
               </div>

                <!-- Item 3 -->
               <div class="ml-6 relative">
                 <span class="absolute -left-[31px] flex h-4 w-4 bg-text-muted rounded-full ring-4 ring-primary"></span>
                 <h4 class="text-xl font-bold text-text-main">B.Sc. Computer Science</h4>
                 <span class="text-sm text-accent">2017 - 2021</span>
                 <p class="text-text-muted mt-2">University of Technology. Major in Software Engineering.</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
