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
      d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <path
      fill="currentColor"
      d="M11.25 4a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm0 18a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm1.5-18V2h-1.5v2h1.5Zm-1.5 16v2h1.5v-2h-1.5ZM5.884 6.945a.75.75 0 1 0 1.06-1.061l-1.06 1.06ZM5.53 4.47a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm12.728 12.728a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm.354 2.474a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM6.945 5.884 5.53 4.47 4.47 5.53l1.414 1.415 1.06-1.061Zm10.253 12.374 1.414 1.415 1.06-1.061-1.414-1.414-1.06 1.06ZM4 12.75a.75.75 0 0 0 0-1.5v1.5Zm-2-1.5a.75.75 0 0 0 0 1.5v-1.5Zm18 0a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-18-1.5H2v1.5h2v-1.5Zm16 1.5h2v-1.5h-2v1.5ZM17.198 5.884a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm2.474-.354a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM6.944 18.258a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-2.474.354a.75.75 0 0 0 1.06 1.06l-1.06-1.06ZM18.258 6.945l1.414-1.415-1.06-1.06-1.414 1.414 1.06 1.06ZM5.884 17.198 4.47 18.612l1.06 1.06 1.414-1.414-1.06-1.06Z"
    />
  </svg>
);
const SvgSun = memo((props: SVGProps<SVGSVGElement>) => (
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
SvgSun.displayName = 'SvgSun';
export default SvgSun;
