import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Link } from '../../../home/model/link';

@Component({
  selector: 'desn-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  imports: [CommonModule],
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
  readonly links: Link[] = [
    {
      faIcon: 'fab fa-github',
      label: 'Github',
      ariaLabel: 'Voir mon profil Github',
      url: 'https://github.com/NicolasDesnoust',
    },
    {
      faIcon: 'fab fa-gitlab',
      label: 'Gitlab',
      ariaLabel: 'Voir mon profil Gitlab',
      url: 'https://gitlab.com/NicolasDesnoust',
    },
    {
      customIcon: 'icons/codingame.svg',
      label: 'Codingame',
      ariaLabel: 'Voir mon profil Codingame',
      url: 'https://www.codingame.com/profile/afe8db750947c013fd1e82837255813e6027824',
    },
    {
      faIcon: 'fab fa-linkedin-in',
      label: 'Linkedin',
      ariaLabel: 'Voir mon profil Linkedin',
      url: 'https://www.linkedin.com/in/nicolas-desnoust/',
    },
    {
      faIcon: 'fas fa-envelope-open-text',
      label: 'Mail',
      ariaLabel: "M'envoyer un mail",
      url: 'mailto:desnoust.nicolas451@gmail.com',
    },
  ];
}
