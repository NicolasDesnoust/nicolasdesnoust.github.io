import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ErrorMessage } from './error-message';

@Component({
  selector: 'desn-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessageComponent {
  @Input() errorMessage: ErrorMessage | undefined;
}
