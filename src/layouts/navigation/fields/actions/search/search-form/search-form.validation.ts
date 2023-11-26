import * as yup from 'yup';

export enum SearchFormFields {
  SEARCH = 'search',
}

export const searchFormValidationSchema = yup.object({
  [SearchFormFields.SEARCH]: yup.string(),
});

export type SearchFormValidation = typeof searchFormValidationSchema;
export type SearchFormValues = yup.InferType<SearchFormValidation>;

export const searchFormDefaultValues: SearchFormValues = {
  [SearchFormFields.SEARCH]: '',
};
