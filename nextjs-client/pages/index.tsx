import Head from 'next/head';
import Layout from '../components/layout/layout';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Alodi | Blog</title>
        <meta
          name="description"
          content="A blog about the development of Alodi"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout></Layout>
    </div>
  );
};

export default Home;
