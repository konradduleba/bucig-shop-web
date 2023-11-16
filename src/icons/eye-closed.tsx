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
      d="M14.316 14.289a3 3 0 1 1-4.234-4.25M3 3l18 18"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.074 5.135c-.176.117-.349.238-.517.361-1.704 1.248-3.007 2.79-3.88 4.006-.438.61-.772 1.146-.998 1.53a14.606 14.606 0 0 0-.324.582l-.018.035-.005.01-.002.004v.001L1 12l-.67-.335a.75.75 0 0 0 0 .67L1 12l-.67.336v.003l.004.006.01.02.04.076a18.235 18.235 0 0 0 .72 1.216 20.426 20.426 0 0 0 2.224 2.856C5.266 18.58 8.2 20.75 12 20.75c2.48 0 4.594-.927 6.295-2.14.246-.174.484-.356.713-.541l-1.095-1.095-.513.433c-1.515 1.074-3.322 1.843-5.4 1.843-3.2 0-5.766-1.83-7.578-3.763A18.925 18.925 0 0 1 1.852 12l.121-.209c.206-.351.516-.847.923-1.414C3.71 9.242 4.9 7.842 6.422 6.722l.76-.479-1.108-1.108Zm12.99 10.868.067-.058a18.501 18.501 0 0 0 3-3.915l.016-.03a18.924 18.924 0 0 0-2.57-3.487C17.767 6.58 15.2 4.75 12 4.75a8.6 8.6 0 0 0-3.454.735L7.417 4.357C8.762 3.687 10.296 3.25 12 3.25c3.8 0 6.734 2.17 8.672 4.237a20.43 20.43 0 0 1 2.796 3.802 11.896 11.896 0 0 1 .187.345l.011.021.003.006.001.002v.001L23 12l.67.336-.001.003-.004.007-.012.024a9.098 9.098 0 0 1-.219.401c-.151.267-.375.642-.67 1.086a19.982 19.982 0 0 1-2.635 3.211l-1.066-1.065ZM23 12l.67-.335a.75.75 0 0 1 0 .67L23 12Z"
      clipRule="evenodd"
    />
  </svg>
);
const SvgEyeClosed = memo((props: SVGProps<SVGSVGElement>) => (
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
SvgEyeClosed.displayName = 'SvgEyeClosed';
export default SvgEyeClosed;
