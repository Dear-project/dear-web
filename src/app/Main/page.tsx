"use client";
import React from "react";
import Head from "src/Components/Home/Header/index";
import Sidebar from "src/Components/Sidebar";

const index = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", backgroundColor: "#F4F5F9" }}
    >
      <Sidebar />
      <Head />
    </div>
  );
};

export default index;
