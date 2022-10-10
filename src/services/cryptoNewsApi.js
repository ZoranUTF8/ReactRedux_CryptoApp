import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CRYPTO_API_HEADER = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "7e131168d4msh54ab90500b6f1bcp15726cjsnc6e46468f422",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: CRYPTO_API_HEADER });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
