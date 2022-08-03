import React, { useState, memo } from "react";
import { Row } from "antd";

import { Loader, Pagination, Header, NewsCard } from "../components";

import { useGetCryptoNewsQuery } from "../services/cryptoNews.api";
import { useGetCryptosQuery } from "../services/crypto.api";

interface IProps {
  simplified?: boolean;
}

const News = ({ simplified }: IProps) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
    offset: (currentPage - 1) * 12
  });

  const { data } = useGetCryptosQuery({ count: 100 });

  if (!cryptoNews?.value) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      <Header
        simplified={simplified!}
        coins={data?.data.coins!}
        setNewsCategory={setNewsCategory}
      />

      {cryptoNews.value.map((news, i) => (
        <NewsCard news={news} key={i} />
      ))}

      <Pagination
        simplified={simplified}
        current={currentPage}
        total={cryptoNews.totalEstimatedMatches!}
        pageSize={12}
        setCurrent={setCurrentPage}
      />
    </Row>
  );
};

export default memo(News);
