import  {dearV1Axios}  from "@/libs/axios/customAxios";
import { ProfileRepository } from "./ProfileRepository";
import { ProfileType } from "@/types/profile/profileModel.types";

class ProfileRepositoryImpl implements ProfileRepository {
  public async getProfileInfo(): Promise<ProfileType> {
    const { data } = await dearV1Axios.get("/profile");
    return data;
  }
}

export default new ProfileRepositoryImpl();