import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import MainPage from "../components/pages/Main";
import Layout from "../components/pages/settings/Layout";
import Main from "../components/pages/settings/Main";

import StockList from "../components/pages/settings/Stock/StockList";
import StockAdd from "../components/pages/settings/Stock/StockAdd";
import StockMain from "../components/pages/settings/Stock/StockMain";
import CommonMain from "../components/pages/settings/CommonCode/CommonCodeMain";
import CommonList from "../components/pages/settings/CommonCode/CommonCodeList";
import CommonAdd from "../components/pages/settings/CommonCode/CommonCodeAdd";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<MainPage />} />
      <Route path="settings" element={<Layout />}>
        <Route path="main" element={<Main />} />
        <Route path="stock" element={<StockMain />}>
          <Route path="list" element={<StockList />} />
          <Route path="add" element={<StockAdd />} />
        </Route>
        <Route path="commonCode" element={<CommonMain />}>
          <Route path="list" element={<CommonList />} />
          <Route path="add" element={<CommonAdd />} />
        </Route>
      </Route>
    </Router>
  );
};

export default Routes;
