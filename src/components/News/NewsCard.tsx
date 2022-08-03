import { Typography, Col, Avatar, Card } from "antd";
import moment from "moment";
import { memo } from "react";
import { INews } from "../../types/cryptoNewsType";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const { Text, Title } = Typography;

interface IProps {
  news: INews;
}

const NewsCard = ({ news }: IProps) => {
  return (
    <Col xs={24} sm={12} lg={8}>
      <Card hoverable className="news-card">
        <a href={news.url} target="_blank" rel="noreferrer">
          <div className="news-image-container">
            <Title className="news-title" level={4}>
              {news.name}
            </Title>
            <img
              src={news?.image?.thumbnail?.contentUrl || demoImage}
              alt=""
              style={{ maxWidth: "200px", maxHeight: "100px" }}
            />
          </div>
          <p>
            {news.description.length > 100
              ? `${news.description.substring(0, 100)}...`
              : news.description}
          </p>
          <div className="provider-container">
            <div>
              <Avatar
                src={news.provider[0].image?.thumbnail?.contentUrl || demoImage}
                alt=""
              />
              <Text className="provider-name">{news.provider[0]?.name}</Text>
            </div>
            <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
          </div>
        </a>
      </Card>
    </Col>
  );
};

export default memo(NewsCard);
