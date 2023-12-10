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
      strokeWidth={0.75}
      d="M20 5H4a1 1 0 0 0-1 1v12.92a1 1 0 0 0 1.625.78l3.101-2.48a1 1 0 0 1 .625-.22H20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z"
    />
  </svg>
);
const SvgChat = memo((props: SVGProps<SVGSVGElement>) => (
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
SvgChat.displayName = 'SvgChat';
export default SvgChat;
