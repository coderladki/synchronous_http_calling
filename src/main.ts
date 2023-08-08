import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';

  constructor() {
    console.log('constructor() invoked!');
    this.callingApi();
  }
  ngOnInit(): void {
    console.log('ngOnInit() invoked!');
  }

  callingApi() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/products/1', false); // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
      console.log(request.responseText);
    }
  }
}

bootstrapApplication(App);
