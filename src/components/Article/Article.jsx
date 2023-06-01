import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Spin } from "antd";

import { useGetArticleQuery } from "../../redux/blog-api";
import { ShortenItem } from "../ShortenItem";

import styles from "./Article.module.scss";

export const Article = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetArticleQuery(slug);

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Spin size="large" />
      </div>
    );

  const { article } = data;

  return (
    <article className={styles.article}>
      <ShortenItem article={article} fullArticle />
      <ReactMarkdown className={styles["article__body"]}>{article.body}</ReactMarkdown>
    </article>
  );
};
