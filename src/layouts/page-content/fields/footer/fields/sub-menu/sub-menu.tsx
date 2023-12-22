import { FC } from 'react';

import { useInitialStateProvider } from '@providers';

import CustomLink from '@components/custom-link/custom-link';
import Typography from '@components/typography';

import { Section } from '@layouts';

import styles from './sub-menu.module.scss';

export const SubMenu: FC = () => {
  const {
    footer: { menu },
  } = useInitialStateProvider();

  return (
    <Section className={styles.container}>
      <ul className={styles.list}>
        {menu.map(({ href, id, title, isExternal }) => (
          <li key={id} className={styles.element}>
            <CustomLink
              href={href}
              className={styles.link}
              external={isExternal}
            >
              <Typography.Text size="16" className={styles.text}>
                {title}
              </Typography.Text>
            </CustomLink>
          </li>
        ))}
      </ul>
    </Section>
  );
};
