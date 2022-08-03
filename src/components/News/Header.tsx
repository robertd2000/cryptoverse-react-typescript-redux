import { Col, Select } from "antd";
import { memo } from "react";
import { ICoin } from "../../types/ctyptoTypes";

interface IProps {
  simplified: boolean;
  coins: ICoin[];
  setNewsCategory: (value: React.SetStateAction<string>) => void;
}

const { Option } = Select;

const Header = ({ simplified, coins, setNewsCategory }: IProps) => {
  return (
    <>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option?.children?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {coins?.map((coin) => (
              <Option key={coin.uuid} value={coin.name}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
    </>
  );
};

export default memo(Header);
