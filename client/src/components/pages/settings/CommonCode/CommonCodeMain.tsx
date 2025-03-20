import { Link, Outlet } from "react-router-dom";
import React from "react";

function CommonMain() {
  return (
    <>
      <h2>
        <Link to="/settings/commonCode/list">공통코드 설정</Link>
      </h2>
      <Outlet />
    </>
  );
}

export default CommonMain;
