import { useEffect, useState } from "react";
import Stock from "../../models/requests/Stock";
import { Link } from "react-router-dom";
import { getOrElse } from "../../../servicies/AxiosWrapper";

function StockList() {
  const [list, setList] = useState<Stock[]>([]);

  useEffect(() => {
    getOrElse<Stock[]>("/stock/list", {}, []).then((res) => {
      setList(res);
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
