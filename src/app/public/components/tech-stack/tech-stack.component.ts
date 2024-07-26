import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css']
})
export class TechStackComponent {
  ngAfterViewInit() {
    this.initScrollingLogos();
  }

  initScrollingLogos() {
    const logoTrack = document.querySelector('.logo-track') as HTMLElement;
    const logos = Array.from(logoTrack.children) as HTMLElement[];
    const cloneCount = 100;

    for (let i = 0; i < cloneCount; i++) {
      logos.forEach(logo => {
        const clone = logo.cloneNode(true) as HTMLElement;
        logoTrack.appendChild(clone);
      });
    }
  }
}
