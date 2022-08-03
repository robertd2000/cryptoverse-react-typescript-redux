import { Pagination as AntPagination } from "antd";
import React, { memo } from "react";

interface IProps {
  simplified?: boolean;
  total: number;
  current: number;
  pageSize: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  simplified,
  total,
  current,
  pageSize,
  setCurrent
}: IProps) => (
  <>
    {!simplified && (
      <>
        <AntPagination
          total={total}
          current={current}
          onChange={(pageNum) => setCurrent(pageNum)}
          hideOnSinglePage={true}
          pageSizeOptions={[pageSize]}
          defaultPageSize={pageSize}
          defaultCurrent={1}
        />
        <br />
      </>
    )}
  </>
);

export default memo(Pagination);
