import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent {
  pageTitle: string;
  constructor() {
    this.pageTitle = 'Angular 2 Starter Project';
  }
}
