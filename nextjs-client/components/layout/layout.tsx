import Head from 'next/head';
import { FunctionComponent, ReactNode } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

import styles from './layout.module.css';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blog | Alodi</title>
        <meta
          name="description"
          content="A blog about the development of Alodi"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
