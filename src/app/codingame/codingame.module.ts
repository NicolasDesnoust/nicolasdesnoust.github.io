import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodingameRoutingModule } from './codingame-routing.module';
import { CodingamePageComponent } from './components/codingame-page/codingame-page.component';
import { HomeModule } from '../home/home.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CodingamePageComponent],
  imports: [CodingameRoutingModule, SharedModule],
})
export class CodingameModule {}
