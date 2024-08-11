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
      "J'ai déjà utilisé cette technologie mais je dois la travailler d'avantage pour l'utiliser sans ralentissements."
    );
    this.toolTipTextMap.set(
      3,
      "J'ai assimilé cette technologie dans les grandes lignes " +
        'mais des recherches approfondies sont nécessaires pour compléter ma connaissance.'
    );
    this.toolTipTextMap.set(
      4,
      "J'ai suffisamment d'expérience dans cette " +
        "technologie pour l'utiliser dans des projets d'entreprise."
    );
    this.toolTipTextMap.set(
      5,
      "J'utilise cette technologie au quotidien sans ralentissements."
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.tooltipText = this.toolTipTextMap.get(this.value) || '';
    }
  }
}
