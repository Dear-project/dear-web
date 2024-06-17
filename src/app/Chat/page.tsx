"use client";
import React from "react";
import Mainpage from "src/Components/Home/Category";
import Sidebar from "src/Components/Sidebar";
// import * as S from "./style";

const index = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Mainpage />
    </div>
  );
};

export default index;
