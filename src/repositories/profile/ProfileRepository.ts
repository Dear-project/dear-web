import { ProfileType } from "../../types/profile/profileModel.types";
export interface ProfileRepository {
  getProfileInfo(): Promise<ProfileType>;
  postSchoolChange(changeParams: SchoolChangeParams): Promise<void>;
  postMajorChange(changeParams: MajorChangeParams): Promise<void>;
  postProfileImage(imageParams: ImageChangeParams): Promise<void>;
  patchPassword(passwordParams: PassswrodChangeParams): Promise<void>;
}

export interface SchoolChangeParams {
  school: string;
}

export interface MajorChangeParams {
  major: string;
}

export interface ImageChangeParams {
  image: FormDataEntryValue;
}

export interface PassswrodChangeParams {
  oldPassword: string;
  newPassword: string;
}
