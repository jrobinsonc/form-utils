import { isValidField } from './isValidField';
import { parseFields } from './parseFields';

/**
 * Retrieves form data as a FormData object.
 *
 * @param form - The form element from which to collect data.
 * @returns A FormData object containing values of valid fields in the form.
 */
export function getFormData(form: HTMLFormElement): FormData {
  return parseFields<FormData>(
    form,
    (carry: FormData, field: HTMLInputElement) => {
      if (isValidField(field) && !carry.has(field.name)) {
        carry.append(field.name, field.value);
      }

      return carry;
    },
    new FormData(),
  );
}
