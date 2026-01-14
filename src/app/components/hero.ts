import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section id="home" class="min-h-screen flex items-center pt-16">
      <div class="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
        
        <!-- Text Content -->
        <div class="md:w-1/2 space-y-6 text-center md:text-left animate-fade-in-up">
          <p class="text-accent font-medium tracking-wide">HELLO, I'M</p>
          <h1 class="text-5xl md:text-7xl font-bold text-text-main leading-tight">
            Lukasz <span class="text-text-muted">Ziaja</span>
          </h1>
          <h2 class="text-2xl md:text-3xl text-text-muted font-light">
            Software Engineer & <span class="text-accent">Problem Solver</span>
          </h2>
          <p class="text-text-muted text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            I build accessible, pixel-perfect, and performant web experiences. 
            Passionate about transforming ideas into reality through code.
          </p>
          
          <div class="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a href="#contact" class="px-8 py-3 bg-accent text-primary font-bold rounded hover:bg-sky-300 transition-colors">
              Get in Touch
            </a>
            <a href="#projects" class="px-8 py-3 border border-accent text-accent font-bold rounded hover:bg-accent/10 transition-colors">
              View Work
            </a>
          </div>
        </div>

        <!-- Image/Graphic -->
        <div class="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div class="relative w-64 h-64 md:w-96 md:h-96">
            <!-- Decorative circle -->
            <div class="absolute inset-0 border-2 border-accent rounded-full animate-spin-slow opacity-20"></div>
            <div class="absolute inset-4 border-2 border-text-muted rounded-full animate-spin-reverse-slow opacity-20"></div>
            
            <!-- Placeholder Avatar -->
            <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-primary rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
               <span class="text-9xl text-accent opacity-50 select-none">LZ</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes spin-reverse-slow {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }
    .animate-spin-reverse-slow {
      animation: spin-reverse-slow 25s linear infinite;
    }
  `]
})
export class HeroComponent {}
