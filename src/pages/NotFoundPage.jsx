import { changeTitle } from "../helpers";
import { NotFound } from "../components/NotFound";

export const NotFoundPage = () => {
  changeTitle("Blog: Page not found");
  return <NotFound />;
};
