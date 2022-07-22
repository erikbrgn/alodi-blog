import Head from 'next/head';
import Layout from '../components/layout/layout';
import Post from '../components/post/post';

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
      <Layout>
        {[
          {
            Title: 'test',
            Body: 'test',
            createdAt: 'created at',
            updatedAt: 'updated at',
            publishedAt: 'published at',
            createdBy: {},
          },
        ].map((post) => (
          <Post data={post} />
        ))}
      </Layout>
    </div>
  );
};

export default Home;
