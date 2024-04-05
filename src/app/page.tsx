"use client";
import Link from "next/link";
import Login from "src/Components/Auth/login";
import SignUpEmail from "src/Components/Auth/signup/Email";

export default function Home() {
  return (
    <div>
      {/* <Login /> */}
      <SignUpEmail />
    </div>
  );
}
