import { Col, Row, Typography } from "antd";
import HTMLReactParser from "html-react-parser";
import { memo } from "react";
import { ILink } from "../../types/ctyptoTypes";

const { Title } = Typography;

interface IProps {
  name: string;
  description: string;
  links: ILink[];
}

const CoinLinks = ({ name, description, links }: IProps) => {
  return (
    <Col className="coin-desc-link">
      <Row className="coin-desc">
        <Title level={3} className="coin-details-heading">
          What is {name}?
        </Title>
        {HTMLReactParser(description || "")}
      </Row>
      <Col className="coin-links">
        <Title level={3} className="coin-details-heading">
          {name} Links
        </Title>
        {links?.map((link) => (
          <Row className="coin-link" key={link.url}>
            <Title level={5} className="link-name">
              {link.type}
            </Title>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          </Row>
        ))}
      </Col>
    </Col>
  );
};

export default memo(CoinLinks);
