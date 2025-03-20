import { Link } from "react-router-dom";
import React from "react";

function Main() {
  return (
    <>
      <h2>설정 목록</h2>
      <ol>
        <li>
          <Link to="/settings/commonCode/list">공통코드</Link>
        </li>
        <li>
          <Link to="/settings/stock/list">주식</Link>
        </li>
      </ol>
    </>
  );
}

export default Main;
