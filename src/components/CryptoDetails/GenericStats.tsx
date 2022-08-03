import { Col, Typography } from "antd";
import { memo } from "react";
import { IStat } from "../../types/ctyptoTypes";

const { Title, Text } = Typography;

interface IProps {
  name: string;
  stats: IStat[];
}

const GenericStats = ({ name, stats }: IProps) => {
  return (
    <Col className="other-stats-info">
      <Col className="coin-value-statistics-heading">
        <Title level={3} className="coin-details-heading">
          Other Stats Info
        </Title>
        <p>
          An overview showing the statistics of {name}, such as the base and
          quote currency, the rank, and trading volume.
        </p>
      </Col>
      {stats.map(({ icon, title, value }) => (
        <Col key={Math.random() * 100} className="coin-stats">
          <Col className="coin-stats-name">
            <Text>{icon}</Text>
            <Text>{title}</Text>
          </Col>
          <Text className="stats">{value}</Text>
        </Col>
      ))}
    </Col>
  );
};

export default memo(GenericStats);
