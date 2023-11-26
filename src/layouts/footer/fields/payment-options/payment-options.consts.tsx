import SvgApplePay from '@icons/apple-pay';
import SvgCardPayment from '@icons/card-payment';
import SvgCashPayment from '@icons/cash-payment';
import SvgVisaPayment from '@icons/visa-payment';

enum PaymentIds {
  APPLE_PAY = 'apple-pay',
  CARD = 'card',
  VISA = 'visa',
  CASH = 'cash',
}

export interface PaymentIcon {
  id: PaymentIds;
  icon: JSX.Element;
}

const ICON_FONT_SIZE = 75;

export const PAYMENT_ICONS: PaymentIcon[] = [
  {
    id: PaymentIds.APPLE_PAY,
    icon: <SvgApplePay fontSize={ICON_FONT_SIZE} />,
  },
  {
    id: PaymentIds.CARD,
    icon: <SvgCardPayment fontSize={ICON_FONT_SIZE} />,
  },
  {
    id: PaymentIds.CASH,
    icon: <SvgCashPayment fontSize={ICON_FONT_SIZE} />,
  },
  {
    id: PaymentIds.VISA,
    icon: <SvgVisaPayment fontSize={ICON_FONT_SIZE} />,
  },
];
