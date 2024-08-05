"use client";
import React from "react";
import Chat from "src/components/home/chat/index"
import Sidebar from "src/components/common/sidebar";
// import * as S from "./style";

const index = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Chat/>
    </div>
  );
};

export default index;
