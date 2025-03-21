import React, { useEffect, useState } from "react";
import CommonCode, { EmptyCommon } from "../../../models/requests/CommonCode";
import { Link } from "react-router-dom";
import { getOrElse, del, isError } from "../../../../servicies/AxiosWrapper";
import messages from "../../../../public/locales/messages";
import CommonCodeUpdateModal from "./CommonCodeUpdateModal";

function CommonList() {
  const [list, setList] = useState<CommonCode[]>([]);
  const [modalData, setModalData] = useState<CommonCode>(EmptyCommon);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    getList();
  }, []);

  const deleteCode = (code: string) => {
    del<string>(`/commonCode/${code}`).then((res) => {
      if (isError(res)) {
        alert(res.errorMessage);
      } else {
        if (res === "SUC") {
          window.location.reload();
        }

        alert(messages[res]);
      }
    });
  };

  const showUpdateModal = (code: CommonCode) => {
    setModalData(code);
    setShowModal(true);
  };

  const closeModal = (reload: boolean = false) => {
    setModalData(EmptyCommon);
    setShowModal(false);

    if (reload) {
      getList();
    }
  };

  const getList = () => {
    getOrElse<CommonCode[]>("/commonCode/list", {}, []).then((res) => {
      setList(res);
    });
  };

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
                      <button
                        className="btn"
                        onClick={() => showUpdateModal(item)}
                      >
                        수정
                      </button>
                      <button
                        className="btn"
                        onClick={() => deleteCode(item.code)}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <CommonCodeUpdateModal
        isOpen={showModal}
        closeModal={closeModal}
        data={modalData}
      />
    </>
  );
}

export default CommonList;
