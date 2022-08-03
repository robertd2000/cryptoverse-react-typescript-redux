import Input from "antd/lib/input/Input";
import { memo } from "react";

interface IProps {
  simplified: boolean;
  searchTerm: string;
  setSearchTerm: (value: React.SetStateAction<string>) => void;
}

const InputHeader = ({ simplified, searchTerm, setSearchTerm }: IProps) => {
  return (
    !simplified && (
      <div className="search-crypto">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          placeholder="Search Cryptocurrency"
        />
      </div>
    )
  );
};

export default memo(InputHeader);
