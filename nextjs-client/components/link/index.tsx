import * as React from 'react';
import Link from 'next/link';

import styles from './index.module.css';

export interface ILinkProps {
  href: string;
}

export const StyledLink: React.FunctionComponent<ILinkProps> = ({ href }) => {
  return (
    <Link href={href}>
      <a className={styles.link}>Read more</a>
    </Link>
  );
};
