import { Link, Outlet } from "react-router-dom";
import React from "react";

function Layout() {
  return (
    <>
      <h1>
        <Link to="/settings/main">설정 페이지</Link>
      </h1>
      <Outlet />
    </>
  );
}

export default Layout;
