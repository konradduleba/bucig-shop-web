import type { FC } from 'react';

import type { HeadingProps } from './heading/heading';
import { Heading } from './heading/heading';
import Text, { type TextProps } from './text/text';

interface TypographyType {
  Heading: FC<HeadingProps>;
  Text: FC<TextProps>;
}

export const Typography = {} as TypographyType;

Typography.Heading = Heading;
Typography.Text = Text;

export default Typography;
