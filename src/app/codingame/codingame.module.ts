import { NgModule } from '@angular/core';

import { CodingameRoutingModule } from './codingame-routing.module';
import { CodingamePageComponent } from './components/codingame-page/codingame-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CodingamePageComponent],
  imports: [CodingameRoutingModule, SharedModule],
})
export class CodingameModule {}
