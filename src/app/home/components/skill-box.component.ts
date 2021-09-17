import { Component, Input } from '@angular/core';

@Component({
  selector: 'desn-skill-box',
  template: `
    <div class="tile is-child box">
      <img
        class="mb-3"
        [src]="imageUrl"
        width="40"
        height="40"
        alt="Icône de '{{ title }}'"
      />
      <p class="title is-size-4 is-spaced">{{ title }}</p>
      <div class="mb-4">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        height: 100%;
      }
    `,
  ],
})
export class SkillBoxComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
