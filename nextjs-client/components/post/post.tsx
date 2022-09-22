import { FunctionComponent } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { strapiData } from '../../pages';
import styles from './post.module.css';
import { StyledLink } from '../link/index';

export interface IPost {
  Title: string;
  Body: string;
}

export interface IPostProps {
  data: strapiData<IPost>;
  page?: boolean;
}

export const Post: FunctionComponent<IPostProps> = ({ data, page = false }) => {
  return (
    <article className={`${styles.article} ${page && styles.page}`}>
      <h2 className={styles.title}>{data.attributes?.Title}</h2>
      <div
        className={`${styles.wrapper} ${!page && styles.fade}`}
        dangerouslySetInnerHTML={{ __html: data.attributes?.Body }}
      ></div>
      <div className={styles.meta}>
        <span className={styles.date}>
          {formatDistanceToNow(new Date(data.attributes?.publishedAt))} ago
        </span>
        {!page && <StyledLink href={`/posts/${data.id}`} />}
      </div>
    </article>
  );
};
