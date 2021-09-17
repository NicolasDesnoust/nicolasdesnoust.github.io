import { Component } from '@angular/core';

@Component({
  selector: 'desn-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  showNavbarMenu: boolean = false;

  toggleNavbarMenu() {
    this.showNavbarMenu = !this.showNavbarMenu;
  }
}
