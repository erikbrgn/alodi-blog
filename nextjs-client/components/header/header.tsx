import { FunctionComponent } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './header.module.css';
import Logo from '../logo/logo';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const { ref, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });

  return (
    <header className={styles.header} ref={ref}>
      <Logo sticky={entry !== undefined && entry?.intersectionRatio < 1} />
    </header>
  );
};

export default Header;
