import { FC } from 'react';
import Link from 'next/link';

import { CONTACT_INFO_ELEMENTS } from './contact.consts';
import { ContactContent, ContactContentTypes } from './contact.types';

import { OneLineContent } from './content/one-line';
import { TwoLinesContent } from './content/two-lines';
import { InfoSection } from './info-section/info-section';

import styles from './contact.module.scss';

const getInfoContent = (props: ContactContent) => {
  const { type } = props;

  if (type === ContactContentTypes.ONE_LINE) {
    return <OneLineContent {...props} />;
  } else if (type === ContactContentTypes.TWO_LINES) {
    return <TwoLinesContent {...props} />;
  } else if (type === ContactContentTypes.CHILDREN) {
    return props.children;
  }

  return null;
};

export const MenuContacts: FC = () => {
  return (
    <div className={styles.container}>
      {CONTACT_INFO_ELEMENTS.map((props: ContactContent) => {
        const { href, id } = props;

        return (
          <Link href={href} key={id} target="_blank" rel="noopener noreferrer">
            <InfoSection>{getInfoContent(props)}</InfoSection>
          </Link>
        );
      })}
    </div>
  );
};
