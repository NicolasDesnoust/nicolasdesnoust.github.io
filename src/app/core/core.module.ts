import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer.component';
import { NavbarComponent } from './components/navbar.component';
import { ResumeCallToActionComponent } from './components/resume-call-to-action.component';
import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LightLayoutComponent } from './layouts/light-layout.component';

const COMPONENTS: any[] = [
  FooterComponent,
  NavbarComponent,
  ResumeCallToActionComponent,
];

const LAYOUTS: any[] = [HomeLayoutComponent, LightLayoutComponent];

@NgModule({
  declarations: [...COMPONENTS, ...LAYOUTS],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS, ...LAYOUTS],
})
export class CoreModule {}
