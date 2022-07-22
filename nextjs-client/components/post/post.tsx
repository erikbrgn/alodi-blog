import { FunctionComponent } from 'react';
import styles from './post.module.css';

interface Post {
  Title: string;
  Body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  createdBy: {};
}

interface PostProps {
  data: Post;
}

const Post: FunctionComponent<PostProps> = ({ data }) => {
  return (
    <article>
      <h2 className={styles.title}>{data.Title}</h2>
      <div
        className={styles.wrapper}
        dangerouslySetInnerHTML={{ __html: data.Body }}
      ></div>
    </article>
  );
};

export default Post;
