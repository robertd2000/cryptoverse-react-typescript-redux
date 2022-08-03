import { memo } from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { Loader } from "../components";

import { useGetExchangesQuery } from "../services/crypto.api";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data.exchanges;

  console.log(exchangesList);

  if (isFetching) return <Loader />;

  return <div>Exchanges</div>;
};

export default memo(Exchanges);
