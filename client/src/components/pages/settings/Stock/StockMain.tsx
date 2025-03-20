import { Link, Outlet } from "react-router-dom";
import React from "react";

function StockMain() {
  return (
    <>
      <h2>
        <Link to="/settings/stock/list">주식 설정</Link>
      </h2>
      <Outlet />
    </>
  );
}

export default StockMain;
