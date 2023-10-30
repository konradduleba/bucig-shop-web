import { ReactNode } from 'react';
import { OneLineContentProps } from './content/one-line';
import { TwoLinesContentProps } from './content/two-lines';
import { LinkProps } from 'next/link';

export enum ContactContentTypes {
  ONE_LINE = 'one-line',
  TWO_LINES = 'two-lines',
  CHILDREN = 'children',
}

export enum ContactIds {
  MAIL = 'mail',
  PHONE = 'phone',
  LOCALIZATION = 'localization',
  HOURS = 'hours',
  MESSAGE = 'message',
}

interface CommonContactProps {
  id: ContactIds;
  href: LinkProps['href'];
}

export type ContactContent = CommonContactProps &
  (
    | ({
        type: ContactContentTypes.ONE_LINE;
      } & OneLineContentProps)
    | ({
        type: ContactContentTypes.TWO_LINES;
      } & TwoLinesContentProps)
    | {
        type: ContactContentTypes.CHILDREN;
        children: ReactNode;
      }
  );
