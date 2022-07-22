import { FunctionComponent } from 'react';
import styles from './header.module.css';
import Logo from '../logo/logo';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};

export default Header;
