import * as yup from 'yup';

const orderIdReg = /^[0-9]{2}\/[0-9]{7}$/;

yup.addMethod(
  yup.string,
  'orderIdFormat',
  function (errorMessage: string, orderIdRegex: string) {
    return this.test('order-id-format', errorMessage, function (value) {
      const { path, createError } = this;
      const [, ...rest] = value ? value.split('/') : [''];
      const orderId = rest.join('/') || '';
      return orderId.match(orderIdRegex)
        ? true
        : createError({
            path,
            message: errorMessage,
          });
    });
  },
);

export const orderIdValidationSchema = yup.object({
  isOrderPlaced: yup
    .boolean()
    .required('WEB_generic.validation.isOrderPlaced.required'),
  orderId: yup.mixed().when(['isOrderPlaced'], (isOrderPlaced: boolean) => {
    if (isOrderPlaced) {
      return (
        yup
          .string()
          .required('WEB_generic.validation.orderId.required')
          // @ts-expect-error Disable check
          .orderIdFormat('WEB_generic.validation.orderId.invalid', orderIdReg)
      );
    } else {
      return yup.string();
    }
  }),
});

export default orderIdValidationSchema;
