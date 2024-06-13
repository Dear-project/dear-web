import { CommunityDataResponse } from "@/types/community/post/post.types";
import { CommunityRepository } from "./communityRepository";
import { dearV1Axios } from "@/libs/Axios/customAxios";

class CommunityRepositoryImpl implements CommunityRepository {
  public async getAllCommunity(page: number): Promise<CommunityDataResponse> {
    const { data } = await dearV1Axios.get(`/community?page=${page}&size=10`);
    return data;
  }
}

const communityRepositoryImpl = new CommunityRepositoryImpl();
export default communityRepositoryImpl;
