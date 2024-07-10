import { dearV1Axios } from "@/libs/axios/customAxios";
import {
  ImageChangeParams,
  MajorChangeParams,
  PassswrodChangeParams,
  ProfileRepository,
  SchoolChangeParams,
} from "./ProfileRepository";
import { ProfileType } from "@/types/profile/profileModel.types";

class ProfileRepositoryImpl implements ProfileRepository {
  public async getProfileInfo(): Promise<ProfileType> {
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
    return;
  }
  public async patchPassword(
    passwordParams: PassswrodChangeParams
  ): Promise<void> {
    await dearV1Axios.patch("/profile/password", passwordParams);
  }
}

export default new ProfileRepositoryImpl();
