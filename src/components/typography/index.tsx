import type { FC } from 'react';

import type { HeadingProps } from './heading/heading';
import { Heading } from './heading/heading';
import type { TextBodyProps } from './text-body/text-body';
import { TextBody } from './text-body/text-body';
import type { TextCaptionProps } from './text-caption/text-caption';
import { TextCaption } from './text-caption/text-caption';
import type { TextLeadProps } from './text-lead/text-lead';
import { TextLead } from './text-lead/text-lead';
import type { TextSmallProps } from './text-small/text-small';
import { TextSmall } from './text-small/text-small';
import Text, { type TextProps } from './text/text';

interface TypographyType {
  Heading: FC<HeadingProps>;
  Body: FC<TextBodyProps>;
  Lead: FC<TextLeadProps>;
  Caption: FC<TextCaptionProps>;
  Text: FC<TextProps>;
  Small: FC<TextSmallProps>;
}

export const Typography = {} as TypographyType;

Typography.Heading = Heading;
Typography.Body = TextBody;
Typography.Lead = TextLead;
Typography.Caption = TextCaption;
Typography.Small = TextSmall;
Typography.Text = Text;

export default Typography;
