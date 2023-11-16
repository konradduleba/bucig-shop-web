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
      fill="currentColor"
      d="m12 20-.365.655a.75.75 0 0 0 .73 0L12 20Zm0-12.838-.69.294a.75.75 0 0 0 1.38 0L12 7.162Zm-9.75 1.81c0 3.357 2.483 6.308 4.751 8.33a29.395 29.395 0 0 0 4.603 3.336l.022.012.006.004h.002v.001L12 20l.365-.655-.004-.002-.017-.01a26.136 26.136 0 0 1-1.334-.834A27.872 27.872 0 0 1 8 16.182C5.767 14.193 3.75 11.63 3.75 8.972h-1.5ZM12.69 6.87c-1.136-2.673-3.717-3.901-6.047-3.565A4.92 4.92 0 0 0 3.55 5.008c-.816.974-1.3 2.311-1.3 3.964h1.5c0-1.354.391-2.335.95-3A3.42 3.42 0 0 1 6.857 4.79c1.67-.241 3.589.633 4.453 2.667l1.38-.587Zm7.56 2.103c0 2.659-2.017 5.221-4.249 7.21a27.874 27.874 0 0 1-4.346 3.151l-.016.01-.004.002L12 20l.365.655h.001l.002-.001.006-.004.022-.012a10.785 10.785 0 0 0 .379-.223 29.393 29.393 0 0 0 4.224-3.113c2.268-2.022 4.751-4.973 4.751-8.33h-1.5Zm-7.56-1.516c.864-2.034 2.783-2.908 4.453-2.667A3.42 3.42 0 0 1 19.3 5.972c.558.665.95 1.646.95 3h1.5c0-1.653-.483-2.99-1.3-3.964a4.92 4.92 0 0 0-3.093-1.704c-2.33-.336-4.911.892-6.047 3.565l1.38.587Z"
    />
  </svg>
);
const SvgHeart = memo((props: SVGProps<SVGSVGElement>) => (
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
SvgHeart.displayName = 'SvgHeart';
export default SvgHeart;
