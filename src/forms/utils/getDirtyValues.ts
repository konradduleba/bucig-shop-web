import type { FieldNamesMarkedBoolean } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

export const getDirtyValues = <T extends FieldValues>(
  dirtyFields: FieldNamesMarkedBoolean<T>,
  allValues: T,
): Partial<T> => {
  if (dirtyFields === true || Array.isArray(dirtyFields)) {
    return allValues;
  }

  return Object.fromEntries(
    Object.keys(dirtyFields).map((key) => [
      key,
      getDirtyValues(dirtyFields[key], allValues[key]),
    ]),
  ) as Partial<T>;
};
