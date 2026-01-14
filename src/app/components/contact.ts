import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact" class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-text-main mb-12 text-center">Get In Touch</h2>
        
        <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-8">
            <h3 class="text-2xl font-bold text-accent">Let's Talk</h3>
            <p class="text-text-muted leading-relaxed">
              I'm currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 class="text-text-main font-medium">Email</h4>
                  <a href="mailto:lukasz.ziaja@example.com" class="text-text-muted hover:text-accent transition-colors">lukasz.ziaja@example.com</a>
                </div>
              </div>
              
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 class="text-text-main font-medium">Location</h4>
                  <p class="text-text-muted">Warsaw, Poland</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Form -->
          <form class="space-y-4" (submit)="onSubmit($event)">
            <div>
              <label for="name" class="block text-text-muted text-sm font-medium mb-1">Name</label>
              <input type="text" id="name" class="w-full bg-secondary border border-secondary text-text-main rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="John Doe">
            </div>
            <div>
              <label for="email" class="block text-text-muted text-sm font-medium mb-1">Email</label>
              <input type="email" id="email" class="w-full bg-secondary border border-secondary text-text-main rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com">
            </div>
            <div>
              <label for="message" class="block text-text-muted text-sm font-medium mb-1">Message</label>
              <textarea id="message" rows="4" class="w-full bg-secondary border border-secondary text-text-main rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="Hello..."></textarea>
            </div>
            <button type="submit" class="w-full bg-accent text-primary font-bold py-3 rounded-lg hover:bg-sky-300 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Thanks for your message! This is a demo form.');
  }
}
