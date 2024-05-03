import Link from "next/link";
import React from "react";
import Login from "src/Components/Auth/login";
import SignUpEmail from "src/Components/Auth/signup/Email";
import SignupInfo from "src/Components/Auth/signup/Info";
import SignUpPw from "src/Components/Auth/signup/Pw";

const Home = () => {
  return (
    <div>
      {/* <Link href={"/login"}>
        <Login />
      </Link>
      <Link href={"/signup/email"}>
        <SignUpEmail />
      </Link>
      <Link href={"/signup/pw"}>
        <SignUpPw onShow />
      </Link>
      <Link href={"/signup/info"}>
        <SignupInfo onShow />
      </Link> */}
    </div>
  );
};

export default Home;
