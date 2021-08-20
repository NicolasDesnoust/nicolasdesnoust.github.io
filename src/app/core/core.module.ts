import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer.component';
import { NavbarComponent } from './components/navbar.component';
import { ResumeCallToActionComponent } from './components/resume-call-to-action.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, ResumeCallToActionComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, NavbarComponent, ResumeCallToActionComponent]
})
export class CoreModule {}
