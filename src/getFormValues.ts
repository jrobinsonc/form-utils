import {parseFields} from './parseFields';
import {isValidField} from './isValidField';

export function getFormValues(form: HTMLFormElement): URLSearchParams {
  return parseFields<URLSearchParams>(
    form,
    (carry, field) => {
      if (isValidField(field) && !carry.has(field.name)) {
        carry.append(field.name, field.value);
      }

      return carry;
    },
    new URLSearchParams()
  );
}
