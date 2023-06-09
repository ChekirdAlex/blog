import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Spin } from "antd";

import { useGetArticleListQuery } from "../redux/blog-api";
import { setPage } from "../redux/listSlice";
import { ItemsList } from "../components/ItemsList";
import { changeTitle, preparedItems } from "../helpers";

import styles from "./pages.module.scss";

export const ListPage = () => {
  changeTitle("Blog: List");

  const dispatch = useDispatch();
  const page = useSelector((state) => state.list.page);
  const articlesPerPage = 5;
  const offsetItems = useMemo(() => articlesPerPage * page - articlesPerPage, [page]);
  const { data, isLoading } = useGetArticleListQuery(offsetItems);

  const onChange = (value) => {
    dispatch(setPage(value));
  };

  const style = {
    margin: 15,
    display: "flex",
    justifyContent: "center",
  };

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Spin size="large" />
      </div>
    );

  const articles = preparedItems(data.articles);

  return (
    <>
      <ItemsList articles={articles} />
      <Pagination
        style={style}
        total={data.articlesCount}
        hideOnSinglePage
        showSizeChanger={false}
        current={page}
        pageSize={articlesPerPage}
        onChange={onChange}
      />
    </>
  );
};
