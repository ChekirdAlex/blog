import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { ListPage } from "../../pages/ListPage";
import { ArticlePage } from "../../pages/ArticlePage";
import { Layout } from "../Layout";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/articles" />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "articles",
          element: <ListPage />,
        },
        {
          path: "articles/:slug",
          element: <ArticlePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
