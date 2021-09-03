import { KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';
import { QuickOverview } from 'src/app/core/model/quick-overview';

@Component({
  selector: 'desn-quick-overview',
  template: `
    <ul class="quick-overview">
      <li
        class="quick-overview-item"
        *ngFor="let category of quickOverview || {} | keyvalue: keepOriginalOrder"
      >
        <div class="quick-overview-item__definition">
          <div class="quick-overview-item__field">
            <div class="quick-overview-item__name">{{ category.key }}</div>
          </div>
          <div class="quick-overview-item__description">
            {{ category.value | join }}
          </div>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./quick-overview.component.scss'],
})
export class QuickOverviewComponent {
  @Input() quickOverview: QuickOverview | undefined;

  keepOriginalOrder(a: KeyValue<any, any>, _b: KeyValue<any, any>) {
    return a.key;
  }
}
