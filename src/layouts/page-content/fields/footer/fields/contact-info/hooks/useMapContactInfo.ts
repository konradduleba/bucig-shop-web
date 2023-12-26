import { ContactInfo } from '../types';

import { useGetEmailInfo } from './useGetEmailInfo';
import { useGetAddressInfo } from './useGetAddressInfo';
import { useGetScheduleInfo } from './useGetScheduleInfo';

export const useMapContactInfo = () => {
  const email = useGetEmailInfo();
  const address = useGetAddressInfo();
  const schedule = useGetScheduleInfo();

  const contact: ContactInfo[] = [email, address, schedule];

  return {
    contact,
  };
};
