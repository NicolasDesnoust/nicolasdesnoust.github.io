import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ResumeCallToActionComponent } from '../components/resume-call-to-action/resume-call-to-action.component';

@Component({
  selector: 'desn-home-layout',
  standalone: true,
  template: `
    <desn-navbar />
    <section class="contenu">
      <router-outlet />
    </section>
    <desn-resume-call-to-action />
    <desn-footer />
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
      }
      :host ::ng-deep .navbar {
        background-color: white !important;
      }
    `,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    ResumeCallToActionComponent,
    FooterComponent,
  ],
})
export class HomeLayoutComponent {}
