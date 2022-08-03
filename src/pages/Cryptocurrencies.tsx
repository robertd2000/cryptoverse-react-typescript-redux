import { memo, useState } from "react";
import { useDebounce } from "use-debounce";
import { Row } from "antd";
import {
  Loader,
  Pagination,
  CryptocurrencyCard,
  InputHeader
} from "../components";

import { useGetCryptosQuery } from "../services/crypto.api";

interface IProps {
  simplified?: boolean;
}

const Cryptocurrencies = ({ simplified }: IProps) => {
  const count = simplified ? 10 : 100;

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [debouncedValue] = useDebounce(searchTerm, 800);

  const { data: cryptosList, isFetching } = useGetCryptosQuery({
    search: debouncedValue,
    count,
    offset: (currentPage - 1) * count
  });

  if (isFetching) return <Loader />;

  return (
    <>
      <InputHeader
        simplified={simplified!}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptosList?.data?.coins?.map((currency) => (
          <CryptocurrencyCard currency={currency} />
        ))}
      </Row>

      <Pagination
        simplified={simplified!}
        current={currentPage}
        total={cryptosList?.data.stats.total!}
        pageSize={count}
        setCurrent={setCurrentPage}
      />
    </>
  );
};

export default memo(Cryptocurrencies);
