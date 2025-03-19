import { ChangeEvent, useState } from "react";
import Asset, { EmptyAsset } from "../models/requests/Asset";
import { get, isError } from "../../servicies/AxiosWrapper";

function GetAsset() {
  const [id, setId] = useState<String>("");
  const [asset, setAsset] = useState<Asset>(EmptyAsset);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onClickHandler = () => {
    get<Asset>(`/asset/${id}`).then((res) => {
      if (!isError(res)) {
        setAsset(res);
      }
    });
  };

  return (
    <>
      <input type="text" onChange={onChangeHandler} />
      <button onClick={() => onClickHandler()}>검색</button>
      <div>
        <label>아이디</label>
        <span>{asset.id}</span>
      </div>
      <div>
        <label>종목명</label>
        <span>{asset.name}</span>
      </div>
      <div>
        <label>가격</label>
        <span>{asset.price}</span>
      </div>
      <div>
        <label>갯수</label>
        <span>{asset.count}</span>
      </div>
    </>
  );
}

export default GetAsset;
