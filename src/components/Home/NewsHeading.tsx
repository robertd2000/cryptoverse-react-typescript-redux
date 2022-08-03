import { memo } from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const NewsHeading = () => {
  return (
    <div className="home-heading-container">
      <Title level={2} className="home-title">
        Latest Crypto News
      </Title>
      <Title level={3}>
        <Link to="/news">Show more</Link>
      </Title>
    </div>
  );
};

export default memo(NewsHeading);
