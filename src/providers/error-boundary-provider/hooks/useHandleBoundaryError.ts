import { ErrorResponse } from '@types';
import { useI18nContext } from '@i18n';

import { useGetParamsErrorResponse } from './useGetParamsErrorResponse';

export const useHandleBoundaryError = () => {
  const { LL } = useI18nContext();
  const errorFromParams = useGetParamsErrorResponse();

  const checkErrorByStatus = (status: number): ErrorResponse | null => {
    if (status === 401) {
      return {
        status,
        error: LL.VALIDATION.INCORRECT_PASSWORD_OR_LOGIN(),
      };
    }

    return null;
  };

  return {
    errorFromParams,
    checkErrorByStatus,
  };
};
