import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { useGetArticleQuery } from "../../redux/blog-api";
import { ShortenItem } from "../ShortenItem";

import styles from "./Article.module.scss";

export const Article = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetArticleQuery(slug);

  if (isLoading) return <h2>Loading...</h2>;

  // Todo http://localhost:3000/articles/ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo-1hp98m

  const { body, ...articleProps } = data.article;

  return (
    <article className={styles.article}>
      <ShortenItem article={articleProps} />
      <ReactMarkdown className={styles["article__body"]}>{body}</ReactMarkdown>
    </article>
  );
};
