import { useI18nContext } from '@i18n';
import { CONTACT_DATA } from '../../../constants';

export const useGetFooterContactData = () => {
  const { LL } = useI18nContext();

  const contactData = [
    {
      label: LL.COMMON.EMAIL(),
      value: CONTACT_DATA.email.value,
      link: CONTACT_DATA.email.href,
    },
    {
      label: LL.COMMON.ADDRESS(),
      value: `${CONTACT_DATA.address.localication}, ${CONTACT_DATA.address.post_code}`,
      link: CONTACT_DATA.address.href,
    },
    {
      label: LL.COMMON.OPEN_HOURS(),
      value: `${LL.HOURS.MON_FRI()}: ${
        CONTACT_DATA.hours.mon_fri
      }, ${LL.HOURS.SAT()}: ${CONTACT_DATA.hours.sat}`,
    },
  ];

  return {
    contactData,
  };
};
