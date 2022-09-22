import { GetStaticPaths, GetStaticProps } from 'next';
import { FunctionComponent } from 'react';
import { strapiResponse } from '..';
import Layout from '../../components/layout/layout';
import { IPost, IPostProps, Post } from '../../components/post/post';

const Page: FunctionComponent<IPostProps> = ({ data }) => {
  return (
    <Layout>
      <Post data={data} page={true} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`http://${process.env.CMS_HOST}/api/posts`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.API_TOKEN,
    },
  });
  const posts: strapiResponse<IPost> = await res.json();

  const paths = posts.data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://${process.env.CMS_HOST}/api/posts/${params?.id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.API_TOKEN,
      },
    }
  );
  const post: strapiResponse<IPost> = await res.json();

  return {
    props: { data: post.data },
  };
};

export default Page;
