import * as yup from 'yup';

const orderIdRegex = /^[0-9]{2}\/[0-9]{7}$/;

export const isOrderPlacedValidationSchema = yup.object({
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
          .orderIdFormat('WEB_generic.validation.orderId.invalid', orderIdRegex)
      );
    } else {
      return yup.string();
    }
  }),
});
