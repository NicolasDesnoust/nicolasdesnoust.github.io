import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ErrorMessage } from './error-message';

@Component({
  selector: 'desn-error-message',
  standalone: true,
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ErrorMessageComponent {
  @Input() errorMessage: ErrorMessage | undefined;
}
