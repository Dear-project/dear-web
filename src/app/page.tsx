"use client";
import React from "react";

import Image from "next/image";
import Mainpage from "@/components/Home/Category";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Mainpage />
    </div>
  );
};

export default Home;