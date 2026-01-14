import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-secondary py-8 border-t border-secondary/50">
      <div class="container mx-auto px-4 text-center">
        <p class="text-text-muted mb-4">
          &copy; {{ currentYear }} Lukasz Ziaja. All rights reserved.
        </p>
        <div class="flex justify-center space-x-6">
          <a href="#" class="text-text-muted hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" class="text-text-muted hover:text-accent transition-colors">GitHub</a>
          <a href="#" class="text-text-muted hover:text-accent transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
