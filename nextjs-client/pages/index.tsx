import Head from 'next/head';
import { FunctionComponent } from 'react';
import Layout from '../components/layout/layout';
import Post, { IPost } from '../components/post/post';

type strapiResponse<T> = {
  data: Array<strapiData<T>>;
  meta: {};
};

export type strapiData<T> = {
  id: string;
  attributes: strapiAttributes<T>;
};

export type strapiAttributes<T> = T & {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  createdBy: {};
};

interface IHomeProps {
  posts: Array<strapiData<IPost>>;
  meta: {};
}

const Home: FunctionComponent<IHomeProps> = ({ posts }) => {
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
        {posts.map((post, index) => (
          <Post key={index} data={post} />
        ))}
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`http://${process.env.CMS_HOST}/api/posts`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.API_TOKEN,
    },
  });
  const posts: strapiResponse<IPost> = await res.json();

  return {
    props: {
      posts: posts.data,
      meta: posts.meta,
    },
  };
}

export default Home;
