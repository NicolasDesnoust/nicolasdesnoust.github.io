import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'desn-skill-level-indicator',
  standalone: true,
  templateUrl: './skill-level-indicator.component.html',
  styleUrls: ['./skill-level-indicator.component.scss'],
  imports: [CommonModule],
})
export class SkillLevelIndicatorComponent implements OnChanges {
  @Input() value: number = 0;
  tooltipText: string = 'Tooltip text';
  toolTipTextMap: Map<number, string>;

  constructor() {
    this.toolTipTextMap = new Map<number, string>();
    this.toolTipTextMap.set(
      2,
      'I have used this technology before but need to work on it further to use it efficiently.'
    );
    this.toolTipTextMap.set(
      3,
      'I have a general understanding of this technology, but in-depth research is needed to complete my knowledge.'
    );
    this.toolTipTextMap.set(
      4,
      'I have sufficient experience with this technology to use it in enterprise projects.'
    );
    this.toolTipTextMap.set(
      5,
      'I use this technology daily without any issues.'
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.tooltipText = this.toolTipTextMap.get(this.value) || '';
    }
  }
}
