import { FC } from 'react';

import { BaseForm, FormInput, UseBaseFormReturnedParams } from '@forms';

import {
  SearchFormFields,
  SearchFormValidation,
  SearchFormValues,
} from './search-form.validation';

interface SearchFormProps {
  formParams: UseBaseFormReturnedParams<SearchFormValidation>;
  inputClassName?: string;
}

export const SearchForm: FC<SearchFormProps> = ({
  formParams,
  inputClassName,
}) => {
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
        className={inputClassName}
      />
    </BaseForm>
  );
};
