import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ICoin,
  ICoinDetails,
  ICurrenciesExchange,
  ICurrenciesResult,
  ICurrencyHistory,
  ICurrencyResult,
  IQueryHistory,
  IStats
} from "../types/ctyptoTypes";

const cryptoApiHeader = {
  "X-RapidAPI-Key": "914581cf34msh172a527d1623623p1b4a62jsnb5f201debaf8",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequrest = (url: string) => ({ url, headers: cryptoApiHeader });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query<
      ICurrenciesResult,
      { search?: string; count: number; offset?: number }
    >({
      query: ({ search = "", count, offset = 0 }) =>
        createRequrest(
          `/coins?search=${search}&limit=${count}&offset=${offset}`
        )
    }),
    getCrypoDetails: builder.query<ICurrencyResult, string>({
      query: (coinId) => createRequrest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query<ICurrencyHistory, IQueryHistory>({
      query: ({ coinId, timeperiod }) =>
        createRequrest(`coin/${coinId}/history?timePeriod=${timeperiod}`)
    }),
    getExchanges: builder.query<ICurrenciesExchange, null>({
      query: () => createRequrest(`/exchanges`)
    })
  })
});

export const {
  useGetCryptosQuery,
  useGetCrypoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery
} = cryptoApi;
