import { General } from '@types';

export const getAddress = ({
  city,
  postCode,
  street,
}: General['localization']) => {
  return `${street}, ${postCode} ${city}`;
};
