export function parseFields<Type>(form: HTMLFormElement,
  reducer: { (carry: Type, field: HTMLInputElement): Type; },
  initialObject: Type): Type {
  const formElements = Object.values(form.elements) as Array<HTMLInputElement>;

  return formElements.reduce(reducer, initialObject);
}
