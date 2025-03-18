import { useEffect, useState } from "react";
import Stock from "../../models/requests/Stock";
import axios from "axios";
import { Link } from "react-router-dom";

function StockList() {
  const [list, setList] = useState<Stock[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/stock/list").then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <>
      {list.map((item) => {
        return <p key={item.code}>{item.code}</p>;
      })}
      <Link to="/settings/stock/add">추가</Link>
    </>
  );
}

export default StockList;
