import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'desn-skill-box',
  template: `
    <div class="tile is-child box">
      <img
        class="mb-3"
        [src]="imageUrl"
        width="40"
        height="40"
        alt="Placeholder image"
      />
      <p class="title is-size-4 is-spaced">{{ title }}</p>
      <!-- <p>{{ description }}</p> -->
      <div class="mb-4">
        <ng-content></ng-content>
        <!-- <desn-skill-list title="SQL :" [skills]="sqlSkills"></desn-skill-list>
        <desn-skill-list
          title="NoSQL :"
          [skills]="nosqlSkills"
        ></desn-skill-list> -->
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
export class SkillBoxComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() {}

  ngOnInit(): void {}
}
