import React, { useState, memo } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Typography, Select } from "antd";

import {
  Loader,
  LineChart,
  Stats,
  GenericStats,
  CoinLinks
} from "../components";

import {
  useGetCrypoDetailsQuery,
  useGetCryptoHistoryQuery
} from "../services/crypto.api";

import { time, getStats, getGenericStats } from "../utils/cryptoDetails";

const { Title } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const [timeperiod, setTimeperiod] = useState("7d");

  const { coinId } = useParams();
  const { data, isFetching } = useGetCrypoDetailsQuery(coinId!);
  const {
    data: coinHistory,
    isFetching: historyIsFetching
  } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod
  });

  const cryptoDetails = data?.data?.coin;

  const stats = getStats(cryptoDetails!);
  const genericStats = getGenericStats(cryptoDetails!);

  if (isFetching || historyIsFetching) return <Loader />;

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
        </Title>
        <p>
          {cryptoDetails?.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </p>
      </Col>
      <Select
        defaultValue="7d"
        value={timeperiod}
        className="select-timeperiod"
        placeholder="Select Timeperiod"
        onChange={(value) => setTimeperiod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
      <LineChart
        coinHistory={coinHistory!}
        currentPrice={millify(+cryptoDetails!.price)}
        coinName={cryptoDetails?.name || ""}
      />
      <Col className="stats-container">
        <Stats name={cryptoDetails?.name!} stats={stats} />
        <GenericStats name={cryptoDetails?.name!} stats={genericStats} />
      </Col>
      <CoinLinks
        name={cryptoDetails?.name!}
        description={cryptoDetails?.description!}
        links={cryptoDetails?.links!}
      />
    </Col>
  );
};

export default memo(CryptoDetails);
