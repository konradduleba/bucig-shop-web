import type { SVGProps } from 'react';
import { memo } from 'react';
const wrapperStyles = {
  transformOrigin: 'center center',
};
const Svg = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg viewBox="0 7 38 24" role="img" {...props} fill="#ffffff">
    <path d="M33,8a4,4,0,0,1,4,4V26a4,4,0,0,1-4,4H5a4,4,0,0,1-4-4V12A4,4,0,0,1,5,8H33m0-1H5a5,5,0,0,0-5,5V26a5,5,0,0,0,5,5H33a5,5,0,0,0,5-5V12a5,5,0,0,0-5-5Z" />
    <path d="M23,21.23a3,3,0,0,0-2.12-2.91l-1.37-.55c-.93-.38-1.63-.61-1.63-1.27s.53-1,1.36-1a3.52,3.52,0,0,1,2.23.84l1.22-1.53A4.94,4.94,0,0,0,20,13.52V12H18v1.62a3.2,3.2,0,0,0-2.57,3,3.12,3.12,0,0,0,2.16,2.92l1.39.59c.94.39,1.55.6,1.55,1.28s-.5,1-1.51,1a4.28,4.28,0,0,1-2.63-1.12L15,23a5.76,5.76,0,0,0,3,1.46V26h2V24.45A3.35,3.35,0,0,0,23,21.23Z" />
  </svg>
);
const SvgCashPayment = memo((props: SVGProps<SVGSVGElement>) => (
  <Svg
    {...props}
    style={{
      ...wrapperStyles,
      ...(props.style || {}),
    }}
    role="img"
    width="0.6em"
    height="0.4em"
  />
));
SvgCashPayment.displayName = 'SvgCashPayment';
export default SvgCashPayment;
