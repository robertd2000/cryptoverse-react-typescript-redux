import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICoin, IStats } from "../types/ctyptoTypes";
import { INewsType } from "../types/cryptoNewsType";

const cryptoNewsHeader = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "914581cf34msh172a527d1623623p1b4a62jsnb5f201debaf8",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com"
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequrest = (url: string) => ({ url, headers: cryptoNewsHeader });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query<
      INewsType,
      { newsCategory: string; count: number; offset?: number }
    >({
      query: ({ newsCategory, count, offset = 0 }) =>
        createRequrest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}&offset=${offset}`
        )
    })
  })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
