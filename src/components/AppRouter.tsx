import Layout from "antd/lib/layout/layout";
import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News
} from "../pages";

const AppRouter = () => {
  return (
    <Layout>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Layout>
  );
};

export default memo(AppRouter);
