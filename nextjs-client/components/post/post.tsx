import { FunctionComponent } from 'react';
import { strapiData } from '../../pages';
import styles from './post.module.css';

export interface IPost {
  Title: string;
  Body: string;
}

interface IPostProps {
  data: strapiData<IPost>;
}

const Post: FunctionComponent<IPostProps> = ({ data }) => {
  return (
    <article>
      <h2 className={styles.title}>{data.attributes?.Title}</h2>
      <div
        className={styles.wrapper}
        dangerouslySetInnerHTML={{ __html: data.attributes?.Body }}
      ></div>
    </article>
  );
};

export default Post;
