import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { AtroposInstance, AtroposOptions } from 'atropos';

declare const Atropos: (options: AtroposOptions) => AtroposInstance;

@Component({
  selector: 'desn-atropos',
  template: `
    <div class="atropos" #atropos>
      <div class="atropos-scale">
        <div class="atropos-rotate">
          <div class="atropos-inner">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./atropos.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtroposComponent implements AfterViewInit, OnDestroy {
  @Input() atroposOptions: AtroposOptions | undefined;
  @ViewChild('atropos') private atropos: ElementRef | undefined;

  private atroposInstance: AtroposInstance | undefined;

  ngAfterViewInit(): void {
    this.atroposInstance = Atropos({
      el: this.atropos?.nativeElement,
      ...this.atroposOptions,

    });
  }

  ngOnDestroy(): void {
    this.atroposInstance?.destroy();
  }
}
