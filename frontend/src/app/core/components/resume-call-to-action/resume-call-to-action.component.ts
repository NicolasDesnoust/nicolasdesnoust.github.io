import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { saveAs } from 'file-saver';
import { SecuredExternalLinkDirective } from 'frontend/src/app/shared/directives/secured-external-link.directive';

@Component({
  selector: 'desn-resume-call-to-action',
  standalone: true,
  templateUrl: './resume-call-to-action.component.html',
  styles: [
    `
      section.resume .box {
        margin-top: -6.5rem;
      }
      section.resume {
        margin-top: 4.5rem;
      }
    `,
  ],
  imports: [CommonModule, SecuredExternalLinkDirective, RouterLink],
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
        .get('/curriculum-vitae_nicolas-desnoust.pdf', {
          responseType: 'blob',
        })
        .subscribe((resumeData: any) => {
          const resumeAsBlob = new Blob([resumeData], {
            type: 'application/pdf',
          });
          saveAs(resumeAsBlob, 'nicolas-desnoust-resume.pdf');
        });
    }
  }
}
