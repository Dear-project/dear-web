import { ProfileType } from "../../types/profile/profileModel.types";
export interface ProfileRepository {
  getProfileInfo(): Promise<ProfileType>;
}
