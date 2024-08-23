import { Component } from '@angular/core';

@Component({
  selector: 'desn-hero',
  standalone: true,
  template: `
    <section class="hero is-medium has-text-centered has-background-white">
      <div class="hero-body">
        <p class="title is-spaced">Full-Stack & Cloud Engineer</p>
        <div class="is-flex is-justify-content-center">
          <div class="divider">ᔕ</div>
        </div>
        <p class="subtitle">
          Passion is a powerful engine of discovery, driving curiosity and a
          desire to learn and understand. The field of computing offers endless
          opportunities for those who are passionate about it. <br /><br />
          Being a Full-Stack & Cloud Engineer means not closing the door to
          these opportunities.
        </p>
      </div>
    </section>
  `,
  styles: [
    `
      .divider {
        color: #2c2c54;
        width: 60%;
        margin-top: 0;
      }
      .divider::after,
      .divider::before {
        background-color: #2c2c5466;
      }
    `,
  ],
})
export class HeroComponent {}
