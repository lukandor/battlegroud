import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="fixed top-0 left-0 w-full bg-primary/90 backdrop-blur-sm border-b border-secondary z-50">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold text-accent">LZ.</a>
        
        <!-- Desktop Menu -->
        <ul class="hidden md:flex space-x-8">
          @for (item of navItems; track item.label) {
            <li>
              <a [href]="item.href" 
                 class="text-text-muted hover:text-accent transition-colors duration-300 font-medium">
                {{ item.label }}
              </a>
            </li>
          }
        </ul>

        <!-- Mobile Menu Button -->
        <button (click)="toggleMenu()" class="md:hidden text-text-main focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Dropdown -->
      @if (isOpen()) {
        <div class="md:hidden bg-secondary p-4 border-t border-secondary/50">
           <ul class="flex flex-col space-y-4">
            @for (item of navItems; track item.label) {
              <li>
                <a [href]="item.href" 
                   (click)="toggleMenu()"
                   class="block text-text-muted hover:text-accent transition-colors duration-300">
                  {{ item.label }}
                </a>
              </li>
            }
          </ul>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  isOpen = signal(false);
  
  navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  toggleMenu() {
    this.isOpen.update(v => !v);
  }
}
