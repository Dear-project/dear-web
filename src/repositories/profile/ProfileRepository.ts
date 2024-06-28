import { ProfileType } from "@/types/profile/profile.type";
export interface ProfileRepository {
  getProfileInfo(): Promise<ProfileType>;
}
