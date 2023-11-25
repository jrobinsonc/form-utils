/**
 * Checks if a field is valid.
 *
 * @param field - The input element to validate.
 * @returns A boolean indicating whether the field is valid or not.
 */
export function isValidField(field: HTMLInputElement): boolean {
  if (typeof field.name !== 'string' || field.name === '') {
    return false;
  }

  if (['radio', 'checkbox'].includes(field.type) && !field.checked) {
    return false;
  }

  return true;
}
