import type { SVGProps } from 'react';
import { memo } from 'react';
const wrapperStyles = {
  transformOrigin: 'center center',
};
const Svg = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 91 91"
    role="img"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      stroke="var(--secondary-10)"
      d="M45.5 79.25c18.64 0 33.75-15.11 33.75-33.75S64.14 11.75 45.5 11.75 11.75 26.86 11.75 45.5 26.86 79.25 45.5 79.25Z"
    />
    <path
      stroke="var(--primary-1)"
      d="M72.531 65.686A33.75 33.75 0 1 1 59.236 14.65"
    />
  </svg>
);
const SvgLoaderIcon = memo((props: SVGProps<SVGSVGElement>) => (
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
SvgLoaderIcon.displayName = 'SvgLoaderIcon';
export default SvgLoaderIcon;
