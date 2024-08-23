import { InjectionToken } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

export const defaultErrorMessages: ValidationErrors = {
  // For Angular official validators
  required: (error: any) => 'This field is required',
  minlength: ({ requiredLength, actualLength }: any) =>
    `This field must be at least ${requiredLength} characters long`,
  maxlength: ({ requiredLength, actualLength }: any) =>
    `This field must not exceed ${requiredLength} characters`,
  email: (error: any) => `This is not a valid email address`,
  min: ({ min }: any) => `This field must not be less than ${min}`,
  max: ({ max }: any) => `This field must not be greater than ${max}`,
  invalidUrl: () => 'Enter a valid URL. Example: https://www.valid-url.com/',
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrorMessages,
});
