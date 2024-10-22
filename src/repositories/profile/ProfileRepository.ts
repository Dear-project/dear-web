import { ProfileType, UserProfile } from "@/types/profile/profile.type";
export interface ProfileRepository {
  getProfileInfo(): Promise<ProfileType>;
  postSchoolChange(changeParams: SchoolChangeParams): Promise<void>;
  postMajorChange(changeParams: MajorChangeParams): Promise<void>;
  postProfileImage(imageParams: ImageChangeParams): Promise<void>;
  patchPassword(passwordParams: PassswrodChangeParams): Promise<void>;
  postEditSchoolAndMajor(editSchoolAndMajorParams: EditSchoolAndMajorParams): Promise<void>;
}

export interface SchoolChangeParams {
  seq: string;
  schoolName: string;
  link: string;
  adres: string;
}

export interface MajorChangeParams {
  majorSeq: string;
  lclass: string;
  mclass: string;
}

export interface ImageChangeParams {
  file: FormDataEntryValue;
}

export interface PassswrodChangeParams {
  oldPassword: string;
  newPassword: string;
}

export interface EditSchoolAndMajorParams {
  school: string;
  major: string;
  stsMessage: ".";
  introduce: ".";
}
