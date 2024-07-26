import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.css']
})
export class FeaturedProjectsComponent {
  projects = [
    { imageSrc: './assets/img.png', title: 'Hot Type', description: 'Red hot type animations' },
    { imageSrc: './assets/img_2.png', title: 'Alterscope', description: 'Web3 risks in real time' },
    { imageSrc: './assets/img_3.png', title: 'Determ', description: 'Sensible media monitoring' },
    { imageSrc: './assets/img_1.png', title: 'Hot Type', description: 'Red hot type animations' },
    { imageSrc: './assets/img_2.png', title: 'Alterscope', description: 'Web3 risks in real time' },
    { imageSrc: './assets/img_3.png', title: 'Determ', description: 'Sensible media monitoring' },
  ];
}
