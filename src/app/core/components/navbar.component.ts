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
          [ngClass]="{ 'is-active': showNavbarMenu }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          (click)="toggleNavbarMenu()"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        [ngClass]="{ 'is-active': showNavbarMenu }"
      >
        <div class="navbar-end">
          <a [routerLink]="['/']" fragment="skills" class="navbar-item">
            Compétences
          </a>
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
  showNavbarMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleNavbarMenu() {
    this.showNavbarMenu = !this.showNavbarMenu;
  }
}
