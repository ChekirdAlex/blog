import { useParams } from "react-router-dom";
import { Spin } from "antd";

import { useGetArticleQuery } from "../redux/blog-api";
import { changeTitle } from "../helpers";
import { ArticleForm } from "../components/UserForms";
import { useAuthCheck } from "../hooks";

import styles from "./pages.module.scss";

export const EditArticlePage = () => {
  useAuthCheck();
  changeTitle("Blog: Edit Article");
  const { slug } = useParams();
  const { data, isLoading } = useGetArticleQuery(slug);

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Spin size="large" />
      </div>
    );

  const { title, description, body, tagList } = data.article;
  const defaultTags = tagList.map((item) => ({ tag: item }));
  const defaultValues = { title, description, body, tagList: defaultTags };

  return <ArticleForm slug={slug} defaultValues={defaultValues} />;
};
