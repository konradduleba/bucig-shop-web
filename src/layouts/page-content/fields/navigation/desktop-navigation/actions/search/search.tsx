import { FC, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { UseBaseFormReturnedParams, useBaseForm } from '@forms';
import { useVisibleToggle } from '@hooks';

import {
  SearchForm,
  SearchFormAnimation,
  SearchFormValidation,
  SearchIcon,
  searchFormDefaultValues,
  searchFormValidationSchema,
} from '../../../shared';

import styles from './search.module.scss';

export const Search: FC = () => {
  const { isVisible, toggleVisibility } = useVisibleToggle();

  const formParams: UseBaseFormReturnedParams<SearchFormValidation> =
    useBaseForm({
      defaultValues: searchFormDefaultValues,
      validationSchema: searchFormValidationSchema,
    });

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <AnimatePresence>
          {isVisible && (
            <SearchFormAnimation>
              <SearchForm formParams={formParams} />
            </SearchFormAnimation>
          )}
        </AnimatePresence>
      </div>
      <SearchIcon isVisible={isVisible} toggleVisibility={toggleVisibility} />
    </div>
  );
};
