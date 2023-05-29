import { Article } from "../components/Article";
import { changeTitle } from "../helpers";

export const ArticlePage = () => {
  changeTitle("Blog: Article");
  return <Article />;
};
