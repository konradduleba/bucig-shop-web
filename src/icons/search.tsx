import type { SVGProps } from 'react';
import { memo } from 'react';
const wrapperStyles = {
  transformOrigin: 'center center',
};
const Svg = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM15 15l6 6"
    />
  </svg>
);
const SvgSearch = memo((props: SVGProps<SVGSVGElement>) => (
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
SvgSearch.displayName = 'SvgSearch';
export default SvgSearch;
