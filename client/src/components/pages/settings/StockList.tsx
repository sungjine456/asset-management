import React, { useEffect, useState } from "react";
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
      <h3>등록된 주식 목록</h3>
      <div>
        <table className="m-auto">
          <thead>
            <th>종목 코드</th>
            <th>종목 이름</th>
          </thead>
          <tbody>
            {list.map((item) => {
              return (
                <tr>
                  <td>{item.code}</td>
                  <td>{item.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="buttons">
        <Link to="/settings/stock/add" className="btn">
          추가
        </Link>
      </div>
    </>
  );
}

export default StockList;
