import {parseFields} from './parseFields';
import {isValidField} from './isValidField';

export function getFormData(form: HTMLFormElement): FormData {
  return parseFields<FormData>(
    form,
    (carry, field) => {
      if (isValidField(field) && !carry.has(field.name)) {
        carry.append(field.name, field.value);
      }

      return carry;
    },
    new FormData()
  );
}
