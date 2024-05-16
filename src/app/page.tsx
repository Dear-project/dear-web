"use client";
import Image from "next/image";
import Mainpage from "@/components/Home/Category";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Mainpage />
    </div>
  );
}
