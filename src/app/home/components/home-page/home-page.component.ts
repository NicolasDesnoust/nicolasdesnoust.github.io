import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'desn-home-page',
  templateUrl: './home-page.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
      }
    `,
  ],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
