import type { SVGProps } from 'react';
import { memo } from 'react';
const wrapperStyles = {
  transformOrigin: 'center center',
};
const Svg = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg viewBox="0 7 38 24" role="img" {...props} fill="#ffffff">
    <path d="M33,8a4,4,0,0,1,4,4V26a4,4,0,0,1-4,4H5a4,4,0,0,1-4-4V12A4,4,0,0,1,5,8H33m0-1H5a5,5,0,0,0-5,5V26a5,5,0,0,0,5,5H33a5,5,0,0,0,5-5V12a5,5,0,0,0-5-5Z" />
    <rect x="5" y="13" width="28" height="3" />
    <rect x="25" y="22" width="8" height="3" />
  </svg>
);
const SvgCardPayment = memo((props: SVGProps<SVGSVGElement>) => (
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
SvgCardPayment.displayName = 'SvgCardPayment';
export default SvgCardPayment;
