"use client";
import React from "react";
import Profile from "src/Components/pages/profile";

const index = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", backgroundColor: "#F4F5F9" }}
    >
      <div>
        <Profile />
      </div>
    </div>
  );
};

export default index;
