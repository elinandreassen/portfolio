import { Component } from '@angular/core';
import { NavComponent } from "../../shared/nav/nav.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [NavComponent]
})
export class AboutComponent {
  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here
  }
}