/**
 * Parses form fields using a given reducer function.
 *
 * @template Type The type of the object that is being accumulated.
 * @param form - The HTML form element whose fields are to be parsed.
 * @param reducer - A function that is used to reduce the form elements into a single output value.
 * @param initialObject - The initial value of the object that is being accumulated.
 * @returns The final accumulated object after all fields have been parsed.
 */
export function parseFields<Type>(
  form: HTMLFormElement,
  reducer: { (carry: Type, field: HTMLInputElement): Type },
  initialObject: Type,
): Type {
  const formElements: HTMLInputElement[] = Object.values(
    form.elements,
  ) as Array<HTMLInputElement>;

  return formElements.reduce(reducer, initialObject);
}
