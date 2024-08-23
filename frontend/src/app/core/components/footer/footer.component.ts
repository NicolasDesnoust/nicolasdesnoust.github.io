import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SecuredExternalLinkDirective } from 'frontend/src/app/shared/directives/secured-external-link.directive';
import { Link } from '../../../home/model/link';

@Component({
  selector: 'desn-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  imports: [CommonModule, SecuredExternalLinkDirective],
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
  readonly links: Link[] = [
    {
      faIcon: 'fab fa-github',
      label: 'Github',
      ariaLabel: 'See my Github profile',
      url: 'https://github.com/NicolasDesnoust',
    },
    {
      customIcon: 'icons/codingame.svg',
      label: 'Codingame',
      ariaLabel: 'See my Codingame profile',
      url: 'https://www.codingame.com/profile/afe8db750947c013fd1e82837255813e6027824',
    },
    {
      faIcon: 'fab fa-linkedin-in',
      label: 'Linkedin',
      ariaLabel: 'See my LinkedIn profile',
      url: 'https://www.linkedin.com/in/nicolas-desnoust/',
    },
    {
      faIcon: 'fas fa-envelope-open-text',
      label: 'Mail',
      ariaLabel: 'Send me an email',
      url: 'mailto:desnoust.nicolas451@gmail.com',
    },
  ];
}
