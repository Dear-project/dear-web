"use client";
import Link from "next/link";
import Login from "src/Components/Auth/login";
import SignUpEmail from "src/Components/Auth/signup/Email";
import SignupPw from "src/Components/Auth/signup/Pw";

export default function Home() {
  return (
    <div>
      {/* <Login /> */}
      {/* <SignUpEmail /> */}
      <SignupPw />
    </div>
  );
}
