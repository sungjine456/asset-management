import React, { useEffect, useState } from "react";
import Common from "../../../models/requests/CommonCode";
import { Link } from "react-router-dom";
import { getOrElse } from "../../../../servicies/AxiosWrapper";

function CommonList() {
  const [list, setList] = useState<Common[]>([]);

  useEffect(() => {
    getOrElse<Common[]>("/commonCode/list", {}, []).then((res) => {
      setList(res);
    });
  }, []);

  return (
    <>
      <h3>등록된 공통코드 목록</h3>
      <div className="d-flex-column" style={{ alignItems: "center" }}>
        <div className="d-flex-column">
          <Link
            to="/settings/commonCode/add"
            className="btn"
            style={{ alignSelf: "flex-end", marginBottom: "10px" }}
          >
            추가
          </Link>

          <table>
            <thead>
              <tr>
                <th>공통코드</th>
                <th>상위 공통코드</th>
                <th>코드명</th>
                <th style={{ minWidth: "30px" }}></th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => {
                return (
                  <tr key={item.code}>
                    <td>{item.code}</td>
                    <td>{item.parent}</td>
                    <td>{item.name}</td>
                    <td>
                      {!item.parent && (
                        <Link
                          to="/settings/commonCode/add"
                          className="btn"
                          state={{ code: item.code, name: item.name }}
                        >
                          추가
                        </Link>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CommonList;
