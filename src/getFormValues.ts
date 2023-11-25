import { isValidField } from './isValidField';
import { parseFields } from './parseFields';

/**
 * Retrieves form data as a URLSearchParams object.
 *
 * @param form - The form element from which to collect data.
 * @returns A URLSearchParams object containing values of valid fields in the form.
 */
export function getFormValues(form: HTMLFormElement): URLSearchParams {
  return parseFields<URLSearchParams>(
    form,
    (carry: URLSearchParams, field: HTMLInputElement) => {
      if (isValidField(field) && !carry.has(field.name)) {
        carry.append(field.name, field.value);
      }

      return carry;
    },
    new URLSearchParams(),
  );
}
