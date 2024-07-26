import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() yearsExperience: number = 0;
  @Input() projectsCompleted: number = 0;
  @Input() industriesServed: number = 0;
}
