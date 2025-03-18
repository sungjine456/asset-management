import { Route, Routes as Router } from "react-router-dom";
import MainPage from "../components/pages/Main";
import Layout from "../components/pages/settings/Layout";
import Main from "../components/pages/settings/Main";
import Stock from "../components/pages/settings/StockMain";
import StockList from "../components/pages/settings/StockList";
import AddStock from "../components/pages/settings/StockAdd";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<MainPage />} />
      <Route path="settings" element={<Layout />}>
        <Route path="main" element={<Main />} />
        <Route path="stock" element={<Stock />}>
          <Route path="list" element={<StockList />} />
          <Route path="add" element={<AddStock />} />
        </Route>
      </Route>
    </Router>
  );
};

export default Routes;
