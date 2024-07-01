import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Comercio } from "../pages/Home";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurantes: builder.query<Comercio[], void>({
      query: () => "restaurantes",
    }),
    getRestaurante: builder.query<Comercio, string>({
      query: (id) => `restaurantes/${id}`
    })
  }),
});

export const {
  useGetFeaturedRestaurantesQuery,
  useGetRestauranteQuery
} = api;

export default api;
