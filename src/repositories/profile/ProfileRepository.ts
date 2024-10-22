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
  school: string;
}

export interface MajorChangeParams {
  major: string;
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
