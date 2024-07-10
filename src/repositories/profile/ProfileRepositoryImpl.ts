import { dearV1Axios } from "@/libs/axios/customAxios";
import {
  ProfileRepository,
  SchoolChangeParams,
  MajorChangeParams,
  ImageChangeParams,
  PassswrodChangeParams,
} from "./ProfileRepository";
import { UserProfile } from "@/types/profile/profile.type";

class ProfileRepositoryImpl implements ProfileRepository {
  public async getProfileInfo(): Promise<UserProfile> {
    const { data } = await dearV1Axios.get("/profile");
    return data;
  }

  public async postSchoolChange(
    changeParams: SchoolChangeParams
  ): Promise<void> {
    return;
  }

  public async postMajorChange(changeParams: MajorChangeParams): Promise<void> {
    return;
  }
  public async postProfileImage(imageParams: ImageChangeParams): Promise<void> {
    const { data } = await dearV1Axios.post("/profile/image", imageParams);
    return data;
  }
  public async patchPassword(
    passwordParams: PassswrodChangeParams
  ): Promise<void> {
    await dearV1Axios.patch("/profile/password", passwordParams);
  }
}

export default new ProfileRepositoryImpl();
