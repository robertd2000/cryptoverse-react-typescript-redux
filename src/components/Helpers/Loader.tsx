import React, { memo } from "react";
import { Spin } from "antd";

const Loader = () => (
  <div className="loader">
    <Spin />
  </div>
);

export default memo(Loader);
