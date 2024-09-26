"use client";
import React from "react";

import Image from "next/image";
import Mainpage from "../app/main/page";
import Sidebar from "@/components/common/sidebar";

const Home = () => {
  return (

    <div style={{ display: "flex", height: "100vh" }}>
      <Mainpage />      
    </div>

  );
};

export default Home;
