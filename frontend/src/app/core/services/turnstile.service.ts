import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

export interface TurnstileRenderOptions {
  sitekey: string;
  theme?: 'auto' | 'light' | 'dark';
  appearance?: 'always' | 'execute' | 'interaction-only';
  execution?: 'render' | 'execute';
  callback: (token: string) => void;
  'error-callback'?: () => void;
}

interface TurnstileApi {
  render(container: HTMLElement, options: TurnstileRenderOptions): string;
  reset(widgetId: string): void;
  execute(widgetId: string): void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_URL =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

@Injectable({ providedIn: 'root' })
export class TurnstileService {
  private readonly platformId = inject(PLATFORM_ID);

  private scriptPromise?: Promise<void>;

  private resolver?: {
    resolve: (token: string) => void;
    reject: (error: unknown) => void;
  };

  async render(
    container: HTMLElement,
    options: TurnstileRenderOptions
  ): Promise<string | undefined> {
    await this.load();
    return window.turnstile?.render(container, options);
  }

  // Mint a fresh token on demand: reset() drops any prior challenge state so
  // execute() always yields a brand-new token; the widget callback settles this.
  getToken(widgetId: string | undefined): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (!widgetId) {
        reject(new Error('Turnstile widget is not ready'));
        return;
      }
      this.resolver = { resolve, reject };
      window.turnstile?.reset(widgetId);
      window.turnstile?.execute(widgetId);
    });
  }

  settle(token?: string): void {
    if (token) {
      this.resolver?.resolve(token);
    } else {
      this.resolver?.reject(new Error('Cloudflare Turnstile challenge failed'));
    }
    this.resolver = undefined;
  }

  private load(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return Promise.reject(
        new Error('Turnstile is only available in the browser')
      );
    }
    this.scriptPromise ??= new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = SCRIPT_URL;
      script.async = true;
      script.defer = true;
      script.addEventListener('load', () => resolve());
      script.addEventListener('error', () =>
        reject(new Error('Failed to load the Cloudflare Turnstile script'))
      );
      document.head.append(script);
    });
    return this.scriptPromise;
  }
}
