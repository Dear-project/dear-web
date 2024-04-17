"use client";
import Link from "next/link";
import Login from "src/Components/Auth/login";
import SignUpEmail from "src/Components/Auth/signup/Email";
import SignupInfo from "src/Components/Auth/signup/Info";
import SignupPw from "src/Components/Auth/signup/Pw";
import GlobalStyles from "src/style/global";

export default function Home() {
  return (
    <div>
      {/* <Login /> */}
      {/* <SignUpEmail /> */}
      {/* <SignupPw /> */}
      <SignupInfo />
    </div>
  );
}
