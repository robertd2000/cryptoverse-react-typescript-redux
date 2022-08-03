import { memo } from "react";

import { Col, Row, Statistic } from "antd";
import millify from "millify";
import { IStats } from "../../types/ctyptoTypes";

interface IProps {
  globalStats: IStats;
}

const GlobalStats = ({ globalStats }: IProps) => {
  return (
    <Row gutter={[32, 32]}>
      <Col span={12}>
        <Statistic title="Total Cryptocurrencies" value={globalStats?.total} />
      </Col>

      <Col span={12}>
        <Statistic
          title="Total Exchanges"
          value={millify(globalStats?.totalExchanges!)}
        />
      </Col>
      <Col span={12}>
        <Statistic
          title="Total Market Cap"
          value={millify(+globalStats?.totalMarketCap!)}
        />
      </Col>
      <Col span={12}>
        <Statistic
          title="Total 24h Volume"
          value={millify(+globalStats?.total24hVolume!)}
        />
      </Col>
      <Col span={12}>
        <Statistic
          title="Total Markets"
          value={millify(globalStats?.totalMarkets!)}
        />
      </Col>
    </Row>
  );
};

export default memo(GlobalStats);
