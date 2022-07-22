import { FunctionComponent } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

import styles from './layout.module.css';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
