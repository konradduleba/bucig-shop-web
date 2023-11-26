import { FC } from 'react';
import { useCycle, AnimatePresence } from 'framer-motion';

import { UseBaseFormReturnedParams, useBaseForm } from '@forms';

import { SearchFormAnimation } from './search-form-animation/search-form-animation';
import { SearchForm } from './search-form/search-form';
import { SearchIcon } from './search-icon/search-icon';

import {
  SearchFormValidation,
  searchFormDefaultValues,
  searchFormValidationSchema,
} from './search-form/search-form.validation';

import styles from './search.module.scss';

export const Search: FC = () => {
  const [isVisible, toggleVisibility] = useCycle(false, true);

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
