// types/profile.ts

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