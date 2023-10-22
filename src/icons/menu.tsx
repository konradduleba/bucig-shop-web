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
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      clipPath="url(#menu_alt_01_svg__a)"
    >
      <path d="M12 17h7M5 12h14M5 7h14" />
    </g>
    <defs>
      <clipPath id="menu_alt_01_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const SvgMenu = memo((props: SVGProps<SVGSVGElement>) => (
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
SvgMenu.displayName = 'SvgMenu';
export default SvgMenu;
