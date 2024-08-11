import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { AtroposInstance, AtroposOptions } from 'atropos';
import { DeviceDetectorService } from 'ngx-device-detector';

declare const Atropos: (options: AtroposOptions) => AtroposInstance;

@Component({
  selector: 'desn-atropos',
  standalone: true,
  template: `
    <div class="atropos" #atropos>
      <div class="atropos-scale">
        <div class="atropos-rotate">
          <div class="atropos-inner">
            <ng-content />
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./atropos.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class AtroposComponent implements AfterViewInit, OnDestroy {
  @Input() atroposOptions: AtroposOptions | undefined;
  @ViewChild('atropos') private atropos: ElementRef | undefined;

  private atroposInstance: AtroposInstance | undefined;
  private supportedBrowsers: { [key: string]: number } = {
    Chrome: 95,
    'MS-Edge-Chromium': 95,
    Opera: 80,
  };

  constructor(private deviceService: DeviceDetectorService) {}

  ngAfterViewInit(): void {
    if (this.isSupportedDevice() && this.isSupportedBrowser()) {
      console.log('Supported browser & device !');

      this.atroposInstance = Atropos({
        el: this.atropos?.nativeElement,
        ...this.atroposOptions,
      });
    }
  }

  private isSupportedDevice(): boolean {
    return this.deviceService.isDesktop();
  }

  private isSupportedBrowser(): boolean {
    const deviceInfo = this.deviceService.getDeviceInfo();
    const currentBrowserName = deviceInfo.browser;

    if (this.supportedBrowsers.hasOwnProperty(currentBrowserName)) {
      const minimumVersionRequired = this.supportedBrowsers[currentBrowserName];
      const currentBrowserVersion = Number(
        deviceInfo.browser_version.split('.')[0]
      );

      if (currentBrowserVersion >= minimumVersionRequired) {
        return true;
      }
    }

    return false;
  }

  ngOnDestroy(): void {
    this.atroposInstance?.destroy();
  }
}
