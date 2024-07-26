import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    let scrollPosition: number;
    scrollPosition = window.pageYOffset;
    if (scrollPosition >= 300) {
      this.isVisible = true;
    }
  }
}
