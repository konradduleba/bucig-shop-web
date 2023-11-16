import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import type { AnyObjectSchema } from 'yup';
import type * as yup from 'yup';

export type UseBaseFormParams<T extends AnyObjectSchema> = Pick<
  UseFormProps<yup.InferType<T>>,
  'mode' | 'defaultValues'
> & {
  validationSchema?: T;
};

export type UseBaseFormReturnedParams<T extends AnyObjectSchema> =
  UseFormReturn<yup.Asserts<T>, object>;

export const useBaseForm = <T extends AnyObjectSchema>({
  mode = 'onTouched',
  defaultValues,
  validationSchema,
}: UseBaseFormParams<T>): UseBaseFormReturnedParams<T> => {
  const formParams = useForm<yup.InferType<T>>({
    mode,
    defaultValues,
    ...(validationSchema && { resolver: yupResolver(validationSchema) }),
  });

  return formParams;
};
