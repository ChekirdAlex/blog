import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { LayoutPage, ArticlePage, ListPage, ProfilePage, SignInPage, SignUpPage } from "../../pages";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/articles" replace />,
    },
    {
      path: "/",
      element: <LayoutPage />,
      children: [
        {
          path: "articles",
          element: <ListPage />,
        },
        {
          path: "articles/:slug",
          element: <ArticlePage />,
        },
        {
          path: "sign-up",
          element: <SignUpPage />,
        },
        {
          path: "sign-in",
          element: <SignInPage />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
