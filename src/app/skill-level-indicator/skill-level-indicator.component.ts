import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'desn-skill-level-indicator',
  templateUrl: './skill-level-indicator.component.html',
  styleUrls: ['./skill-level-indicator.component.scss'],
})
export class SkillLevelIndicatorComponent implements OnInit, OnChanges {
  @Input() value: number = 0;
  class: string = 'very-low';
  tooltipText: string = "Tooltip text";

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      if (this.value <= 1) {
        this.class = 'very-low';
      } else if (this.value <= 2) {
        this.class = 'low';
      } else if (this.value <= 3) {
        this.class = 'medium';
      } else if (this.value <= 4) {
        this.class = 'high';
      } else if (this.value > 4) {
        this.class = 'very-high';
      }
    }
  }
}
