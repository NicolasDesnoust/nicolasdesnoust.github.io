import { Component, OnInit } from '@angular/core';
import { Link } from '../../home/model/link';

@Component({
  selector: 'desn-footer',
  template: `
    <footer id="footer" class="footer has-background-primary">
      <div class="content has-text-centered">
        <div class="mb-6 buttons is-justify-content-center">
          <a
            *ngFor="let link of links"
            class="button"
            [attr.data-tooltip]="link.label"
            [href]="link.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span *ngIf="link.faIcon" class="icon is-large">
              <i [class]="link.faIcon"></i>
            </span>
            <span *ngIf="link.customIcon" class="icon is-large">
              <img
                style="border-radius: 0.25rem"
                [src]="link.customIcon"
                height="20px"
                width="20px"
              />
            </span>
          </a>
        </div>
        <p class="has-text-white">
          Fait à la main avec
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://angular.io/"
          >
            Angular</a
          >,
          <a target="_blank" rel="noopener noreferrer" href="https://bulma.io/">
            Bulma
          </a>
          et
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://scully.io/"
          >
            Scully
          </a>
          <br />
          <small>&copy; Copyright {{ currentYear }}, Nicolas Desnoust</small>
        </p>
      </div>
    </footer>
  `,
  styles: [
    `
      footer {
        /* background-color: black;
        background-image: linear-gradient(
          102.1deg,
          rgba(90, 60, 238, 0.6196078431372549) 61%,
          #362595 61.1%
        ); */
      }
    `,
  ],
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  links: Link[] = [
    {
      faIcon: 'fab fa-github',
      label: 'Github',
      url: 'https://github.com/NicolasDesnoust',
    },
    {
      faIcon: 'fab fa-gitlab',
      label: 'Gitlab',
      url: 'https://gitlab.com/NicolasDesnoust',
    },
    {
      customIcon: 'assets/icons/codingame.svg',
      label: 'Codingame',
      url: 'https://www.codingame.com/profile/afe8db750947c013fd1e82837255813e6027824',
    },
    {
      faIcon: 'fab fa-linkedin-in',
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/nicolas-desnoust/',
    },
    {
      faIcon: 'fas fa-envelope-open-text',
      label: 'Mail',
      url: 'mailto:desnoust.nicolas451@gmail.com',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
