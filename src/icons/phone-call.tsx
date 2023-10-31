import type { SVGProps } from 'react';
import { memo } from 'react';
const wrapperStyles = {
  transformOrigin: 'center center',
};
const Svg = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M13.892 7.058a3.823 3.823 0 0 1 3.02 3.02M13.891 4a6.88 6.88 0 0 1 6.077 6.07m-.764 6.101v2.294a1.528 1.528 0 0 1-1.667 1.529 15.13 15.13 0 0 1-6.598-2.347 14.908 14.908 0 0 1-4.587-4.587A15.13 15.13 0 0 1 4.006 6.43a1.53 1.53 0 0 1 1.522-1.666H7.82a1.53 1.53 0 0 1 1.53 1.315c.096.733.276 1.454.534 2.148a1.53 1.53 0 0 1-.344 1.613l-.97.97a12.232 12.232 0 0 0 4.587 4.588l.97-.97a1.529 1.529 0 0 1 1.614-.345 9.812 9.812 0 0 0 2.148.535 1.53 1.53 0 0 1 1.315 1.552Z"
      stroke="currentColor"
      strokeWidth={0.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const SvgPhoneCall = memo((props: SVGProps<SVGSVGElement>) => (
  <Svg
    {...props}
    style={{
      ...wrapperStyles,
      ...(props.style || {}),
    }}
    role="img"
    width="1em"
    height="1em"
  />
));
SvgPhoneCall.displayName = 'SvgPhoneCall';
export default SvgPhoneCall;
