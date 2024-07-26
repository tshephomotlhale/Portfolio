import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './projects-cards.component.html',
  styleUrls: ['./projects-cards.component.css']
})
export class ProjectsCardsComponent {
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
