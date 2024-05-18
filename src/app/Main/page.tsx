"use client";
import React from "react";
import Head from "src/Components/common/Header/index";
import Main from "src/Components/pages/main";

const index = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", backgroundColor: "#F4F5F9" }}
    >
      <div>
        <Head />
        <Main />
      </div>
    </div>
  );
};

export default index;
