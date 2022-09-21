import { FunctionComponent } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { strapiData } from '../../pages';
import styles from './post.module.css';
import { StyledLink } from '../link/index';

export interface IPost {
  Title: string;
  Body: string;
}

interface IPostProps {
  data: strapiData<IPost>;
}

const Post: FunctionComponent<IPostProps> = ({ data }) => {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>{data.attributes?.Title}</h2>
      <div
        className={styles.wrapper}
        dangerouslySetInnerHTML={{ __html: data.attributes?.Body }}
      ></div>
      <div className={styles.meta}>
        <span className={styles.date}>
          {formatDistanceToNow(new Date(data.attributes?.publishedAt))} ago
        </span>
        <StyledLink href={`/post/${data.id}`} />
      </div>
    </article>
  );
};

export default Post;
