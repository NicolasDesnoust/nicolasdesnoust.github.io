import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'desn-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [CommonModule, RouterLink],
})
export class NavbarComponent {
  showNavbarMenu: boolean = false;

  toggleNavbarMenu() {
    this.showNavbarMenu = !this.showNavbarMenu;
  }
}
