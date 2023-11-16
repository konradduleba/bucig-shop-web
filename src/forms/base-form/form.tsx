import { yupResolver } from '@hookform/resolvers/yup';
import { PropsWithChildren, useEffect } from 'react';
import {
  useForm,
  FormProvider,
  Mode,
  useWatch,
  FieldValues,
} from 'react-hook-form';
import type { AnyObjectSchema } from 'yup';

export interface BaseFormDepricatedProps<T> {
  onSubmit: (values: FieldValues) => void;
  defaultValues: T;
  mode?: Mode;
  onChange?: (values: T) => void;
  validationSchema?: AnyObjectSchema;
}

export type FormProps<T> = PropsWithChildren<BaseFormDepricatedProps<T>>;

export const Form = <T extends Record<string, unknown>>({
  children,
  onSubmit,
  mode = 'onBlur',
  defaultValues,
  onChange,
  validationSchema,
}: FormProps<T>) => {
  const { ...formParams } = useForm({
    mode,
    defaultValues,
    ...(validationSchema && { resolver: yupResolver(validationSchema) }),
  });
  const values = useWatch({ control: formParams.control });

  useEffect(() => {
    onChange?.(values as T);
  }, [values, onChange]);

  return (
    <FormProvider {...formParams}>
      <form onSubmit={formParams.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
