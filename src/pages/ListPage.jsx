import { useMemo, useState } from "react";
import { Pagination } from "antd";

import { useGetArticleListQuery } from "../redux/blog-api";
import { ItemsList } from "../components/ItemsList";

export const ListPage = () => {
  const articlesPerPage = 5;
  const [page, setPage] = useState(1);
  const offsetItems = useMemo(() => articlesPerPage * page - articlesPerPage, [page]);
  const { data, isLoading } = useGetArticleListQuery(offsetItems);

  const onChange = (value) => {
    setPage(value);
  };

  const style = {
    margin: 15,
    display: "flex",
    justifyContent: "center",
  };

  if (isLoading) return <h2>LOADING...</h2>;

  return (
    <>
      <ItemsList articles={data.articles} />
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
