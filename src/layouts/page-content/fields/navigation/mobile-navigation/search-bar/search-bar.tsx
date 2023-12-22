import { FC } from 'react';

import { UseBaseFormReturnedParams, useBaseForm } from '@forms';

import {
  SearchForm,
  SearchFormValidation,
  searchFormDefaultValues,
  searchFormValidationSchema,
} from '../../shared';

import styles from './search-bar.module.scss';

export const SearchBar: FC = () => {
  const formParams: UseBaseFormReturnedParams<SearchFormValidation> =
    useBaseForm({
      defaultValues: searchFormDefaultValues,
      validationSchema: searchFormValidationSchema,
    });

  return (
    <div className={styles.container}>
      <SearchForm formParams={formParams} inputClassName={styles.input} />
    </div>
  );
};
