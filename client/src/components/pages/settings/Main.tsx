import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <h2>설정 목록</h2>
      <ol>
        <li>
          <Link to="/settings/stock/list">주식</Link>
        </li>
      </ol>
    </>
  );
}

export default Main;
