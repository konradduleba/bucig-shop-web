import type { SVGProps } from 'react';
import { memo } from 'react';
const wrapperStyles = {
  transformOrigin: 'center center',
};
const Svg = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 38 38"
    role="img"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.75}
      d="M31.632 7.947H6.368c-.872 0-1.579.707-1.579 1.58v18.947c0 .872.707 1.579 1.58 1.579h25.263c.872 0 1.579-.707 1.579-1.58V9.527c0-.872-.707-1.579-1.58-1.579Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.75}
      d="M4.79 9.526 19.405 20.58 33.211 9.526"
    />
  </svg>
);
const SvgMail = memo((props: SVGProps<SVGSVGElement>) => (
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
SvgMail.displayName = 'SvgMail';
export default SvgMail;
