import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create a base query with custom headers
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://mi-blogs.onrender.com/api',
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Blogs", "Posts"],
  endpoints: (builder) => ({}),
});