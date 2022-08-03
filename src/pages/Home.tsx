import { memo } from "react";

import { Cryptocurrencies, News } from "./";
import { Loader, HomeHeading, HomeNewsHeading } from "../components";

import { useGetCryptosQuery } from "../services/crypto.api";

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery({ count: 10 });
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <HomeHeading globalStats={globalStats!} />
      <Cryptocurrencies simplified />

      <HomeNewsHeading />
      <News simplified />
    </>
  );
};

export default memo(Home);
