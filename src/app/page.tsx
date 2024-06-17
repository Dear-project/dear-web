"use client";
import React from "react";

import Image from "next/image";
import Mainpage from "@/components/home/category/index";
import Sidebar from "@/components/common/sidebar";

const Home = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Mainpage />
    </div>
  );
};

export default Home;