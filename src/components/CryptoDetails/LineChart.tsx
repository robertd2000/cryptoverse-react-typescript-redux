import { memo } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Col, Row, Typography } from "antd";
import { createCoinPriceArray } from "../../utils";
import { ICurrencyHistory } from "../../types/ctyptoTypes";

const { Title } = Typography;

interface IProps {
  coinHistory: ICurrencyHistory;
  currentPrice: string;
  coinName: string;
}

const LineChart = ({ coinHistory, currentPrice, coinName }: IProps) => {
  const [coinPrice, coinTimestamp] = createCoinPriceArray(
    coinHistory?.data?.history!
  );

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd"
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>

        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price ${currentPrice}
          </Title>
        </Col>
      </Row>
      {coinPrice.length > 0 && coinTimestamp.length > 0 && (
        <Line datasetIdKey="id" options={options} data={data} />
      )}
    </>
  );
};

export default memo(LineChart);
