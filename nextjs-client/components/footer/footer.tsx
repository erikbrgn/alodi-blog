import { FunctionComponent } from 'react';
import styles from './footer.module.css';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}> &copy; 2022 Alodi.app </span>
    </footer>
  );
};

export default Footer;
