import { FC } from 'react';

import { BaseForm, FormInput, UseBaseFormReturnedParams } from '@forms';

import {
  SearchFormFields,
  SearchFormValidation,
  SearchFormValues,
} from './search-form.validation';

interface SearchFormProps {
  formParams: UseBaseFormReturnedParams<SearchFormValidation>;
}

export const SearchForm: FC<SearchFormProps> = ({ formParams }) => {
  const onSubmit = (props: SearchFormValues) => {
    console.log(props);
  };

  return (
    <BaseForm formParams={formParams} onSubmit={onSubmit}>
      <FormInput
        name={SearchFormFields.SEARCH}
        label=""
        variant="secondary"
        autoFocus
      />
    </BaseForm>
  );
};
