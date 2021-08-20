import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { saveAs } from 'file-saver';

@Component({
  selector: 'desn-resume-call-to-action',
  template: `
    <section class="section resume has-background-primary has-text-centered">
      <div class="container is-narrow">
        <div class="box">
          <div class="columns level">
            <div class="column level-item">
              <h1 class="title is-4">Entrer en contact</h1>
            </div>
            <div class="column level-item">
              <p>
                Vous souhaitez me recruter? Vous pouvez me contacter par email,
                sur Linkedin et télécharger mon Curriculum Vitae.
              </p>
            </div>
            <div class="column level-item">
              <button
                *ngIf="isFileSaverSupported"
                class="button is-primary"
                (click)="downloadResume()"
              >
                <span class="icon">
                  <i class="fas fa-file-alt"></i>
                </span>
                <span>Télécharger mon CV</span>
              </button>

              <div
                *ngIf="!isFileSaverSupported"
                class="notification is-warning is-light"
              >
                Vous ne pouvez pas télécharger mon CV: votre navigateur ne
                supporte pas cette fonctionnalité. Vous pouvez néanmoins changer
                de navigateur ou me contacter par mail.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      section.resume .box {
        margin-top: -6.5rem;
      }
    `,
  ],
})
export class ResumeCallToActionComponent implements OnInit {
  resumeUrl: SafeResourceUrl = '';
  isFileSaverSupported: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.checkFileSaverSupport();
  }

  private checkFileSaverSupport() {
    try {
      this.isFileSaverSupported = !!new Blob();
    } catch (e) {}
  }

  downloadResume() {
    if (this.isFileSaverSupported) {
      this.http
        .get('/assets/curriculum-vitae-2021.pdf', { responseType: 'blob' })
        .subscribe((resumeData: any) => {
          const resumeAsBlob = new Blob([resumeData], {
            type: 'application/pdf',
          });
          saveAs(resumeAsBlob, 'cv-nicolas-desnoust.pdf');
        });
    }
  }
}
