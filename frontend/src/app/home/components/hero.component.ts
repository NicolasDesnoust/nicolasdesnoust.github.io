import { Component } from '@angular/core';

@Component({
  selector: 'desn-hero',
  template: `
    <section class="hero is-medium has-text-centered has-background-white">
      <div class="hero-body">
        <p class="title is-spaced">Développeur Web Fullstack</p>
        <div class="is-flex is-justify-content-center">
          <div class="divider">ᔕ</div>
        </div>
        <p class="subtitle">
          La passion est un puissant moteur de découverte. Elle entraine avec
          elle la curiosité, la soif de savoir, de comprendre.<br />
          L'informatique est une source intarissable d'opportunités pour ses
          passionnés. Être développeur web fullstack, c'est ne pas fermer la
          porte à ces opportunités.

          <br />
          <br />
          Entretenir la communication entre les experts et les clients,
          apprendre pour mieux enseigner, être au service d'autrui. <br />
          C'est mon engagement au quotidien.
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
