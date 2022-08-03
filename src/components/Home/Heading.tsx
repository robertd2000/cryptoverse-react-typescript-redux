import { Typography } from "antd";
import { memo } from "react";
import { Link } from "react-router-dom";
import GlobalStats from "./GlobalStats";
import { IStats } from "../../types/ctyptoTypes";

const { Title } = Typography;

interface IProps {
  globalStats: IStats;
}

const Heading = ({ globalStats }: IProps) => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <GlobalStats globalStats={globalStats!} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptos In The World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
    </>
  );
};

export default memo(Heading);
