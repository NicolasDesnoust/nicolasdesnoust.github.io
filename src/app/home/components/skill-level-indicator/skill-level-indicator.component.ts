import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'desn-skill-level-indicator',
  templateUrl: './skill-level-indicator.component.html',
  styleUrls: ['./skill-level-indicator.component.scss'],
})
export class SkillLevelIndicatorComponent implements OnChanges {
  @Input() value: number = 0;
  class: string = 'very-low';
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
    this.tooltipText = this.toolTipTextMap.get(this.value) || '';
  }
}
