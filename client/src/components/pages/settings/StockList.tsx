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
      <div className="d-flex-column" style={{ alignItems: "center" }}>
        <div className="d-flex-column">
          <table>
            <thead>
              <tr>
                <th>종목 코드</th>
                <th>종목 이름</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => {
                return (
                  <tr key={item.code}>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Link
            to="/settings/stock/add"
            className="btn"
            style={{ alignSelf: "flex-end", marginTop: "10px" }}
          >
            추가
          </Link>
        </div>
      </div>
    </>
  );
}

export default StockList;
