import { FC } from 'react';
import cn from 'classnames';

import { useInitialStateProvider } from '@providers';

import CustomLink from '@components/custom-link/custom-link';
import Typography from '@components/typography';

import { Section } from '@layouts';

import styles from './contact-info.module.scss';

export const ContactInfo: FC = () => {
  const {
    footer: { contact },
  } = useInitialStateProvider();

  return (
    <Section className={styles.container}>
      {contact.map(({ href, isExternal, value, id, title }) => {
        return (
          <div key={id} className={styles.contact}>
            <Typography.Text size="16" className={styles.label}>
              {title}
            </Typography.Text>
            {href ? (
              <CustomLink href={href} external={isExternal}>
                <Typography.Text
                  size="16"
                  className={cn(styles.value, styles.link)}
                >
                  {value}
                </Typography.Text>
              </CustomLink>
            ) : (
              <Typography.Text size="16" className={styles.value}>
                {value}
              </Typography.Text>
            )}
          </div>
        );
      })}
    </Section>
  );
};
