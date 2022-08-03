import { Col } from "antd";
import Card from "antd/lib/card/Card";
import millify from "millify";
import { memo } from "react";
import { Link } from "react-router-dom";
import { ICoin } from "../../types/ctyptoTypes";

interface IProps {
  currency: ICoin;
}

const CryptocurrencyCard = ({ currency }: IProps) => {
  return (
    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
      <Link to={`/crypto/${currency.uuid}`}>
        <Card
          title={`${currency.rank}. ${currency.name}`}
          extra={
            <img
              className="crypto-image"
              src={currency.iconUrl}
              alt={currency.name}
            />
          }
          hoverable
        >
          <p>Price: {millify(+currency.price)}</p>
          <p>Market Cap: {millify(+currency.marketCap)}</p>
          <p>Daily Change: {currency.change}%</p>
        </Card>
      </Link>
    </Col>
  );
};

export default memo(CryptocurrencyCard);
