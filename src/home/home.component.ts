import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `
  // templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
