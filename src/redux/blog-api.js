import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { getCookie } from "../helpers";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://blog.kata.academy/api/" }),
  endpoints: (build) => ({
    getArticleList: build.query({
      query: (offset) => `articles?limit=5&offset=${offset}`,
    }),
    getArticle: build.query({
      query: (slug) => `articles/${slug}`,
    }),
    signInUser: build.mutation({
      query: (body) => ({
        url: "users/login",
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      }),
    }),
    signUpUser: build.mutation({
      query: (body) => ({
        url: "users",
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      }),
    }),
    updateUser: build.mutation({
      query: (body) => ({
        url: "user",
        method: "PUT",
        headers: {
          Authorization: `Token ${getCookie("Token")}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      }),
    }),
  }),
});

export const {
  useGetArticleListQuery,
  useGetArticleQuery,
  useSignUpUserMutation,
  useSignInUserMutation,
  useUpdateUserMutation,
} = blogApi;
