"use client";
import Image from "next/image";
import Mainpage from "src/Components/Home/Category";
import Sidebar from "src/Components/Sidebar";

export default function Home() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Mainpage />
    </div>
  );
}
