import { useSearchParams } from 'next/navigation';
import { ErrorResponse, ErrorTypes } from '@types';
import { useI18nContext } from '@i18n';

export const useGetParamsErrorResponse = (): ErrorResponse | null => {
  const { LL } = useI18nContext();
  const params = useSearchParams();

  const error = params.get('error');

  if (error === ErrorTypes.CALLBACK) {
    return {
      status: 401,
      error: LL.VALIDATION.EMAIL_IS_TAKEN(),
    };
  }

  return null;
};
