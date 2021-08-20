import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'desn-about-me',
  template: `
    <section class="section is-medium has-background-primary has-text-centered">
      <h1 class="title is-spaced has-text-white">
        Bonjour, je m'appelle Nicolas. Ravi de vous rencontrer !
      </h1>
      <h2 class="subtitle has-text-white">
        Voici un aperçu des compétences que j'ai pu aquérir. Une note proche de
        0 signifie que je viens récemment de découvrir cette technologie. Une
        note proche de 5 n'indique pas que je connais tout à propos de cette
        technologie, mais plutôt que je suis confient dans mes capacités à
        l'utiliser avec succès dans un projet d'entreprise.
      </h2>
    </section>
  `,
  styles: [],
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
