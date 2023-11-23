export function isValidField(field: HTMLInputElement): boolean {
  if (typeof field.name !== 'string' || field.name === '') {
    return false;
  }

  if (['radio', 'checkbox'].includes(field.type) && !field.checked) {
    return false;
  }

  return true;
}
