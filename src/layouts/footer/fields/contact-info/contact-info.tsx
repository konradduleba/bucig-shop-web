import { FC } from 'react';
import cn from 'classnames';

import CustomLink from '@components/custom-link/custom-link';
import Typography from '@components/typography';

import { Section } from '@layouts';

import { useGetFooterContactData } from '../../hooks/useGetFooterContactData';

import styles from './contact-info.module.scss';

export const ContactInfo: FC = () => {
  const { contactData } = useGetFooterContactData();

  return (
    <Section className={styles.container}>
      {contactData.map(({ label, value, link }) => {
        return (
          <div key={value} className={styles.contact}>
            <Typography.Text size="16" className={styles.label}>
              {label}
            </Typography.Text>
            {link ? (
              <CustomLink href={link} external>
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
