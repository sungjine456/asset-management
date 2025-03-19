import AddAsset from "./AddAsset";
import GetAsset from "./GetAsset";
import { useNavigate } from "react-router-dom";
import React from "react";

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <header className="App-header">Test</header>
      <AddAsset />
      <GetAsset />
      <button onClick={() => navigate("/settings/main")}>세팅</button>
    </>
  );
}

export default Main;
