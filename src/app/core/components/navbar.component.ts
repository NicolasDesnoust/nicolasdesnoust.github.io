import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'desn-navbar',
  template: `
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" [routerLink]="['/']"> nicolas desnoust </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <a class="navbar-item"> Compétences </a>
          <a [routerLink]="['/']" fragment="projets" class="navbar-item">
            Projets
          </a>
          <a [routerLink]="['/']" fragment="footer" class="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar {
        background-color: transparent;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
