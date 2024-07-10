// types/profile.ts

import { SignupParams } from "@/types/auth/auth.type";

export interface UserProfile {
  id: number;
  email: string;
  name: string;
  type: "STUDENT";
  schoolName: string;
  introduce: string;
  img: string;
  stsMessage: string;
  lclass: string;
  mclass: string;
}
export interface ProfileType {
  data: 
    {
      id: number;
      email: string;
      name: string;
      type: string;
      schoolName: string;
      introduce: string;
      img: string;
      stsMessage: string;
      lclass: string;
      mclass: string;
    }
}

// export interface PasswordDataType {
//   oldPassword: string;

// }