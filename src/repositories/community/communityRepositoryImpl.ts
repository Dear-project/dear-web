import {
  CommunityDataResponse,
  CommunityPostArticlesResponse,
  PostCommunityResponse,
} from "@/types/community/post/post.types";
import { CommunityRepository, PostCommunityParams, PostImageParams, PutCommunityParams } from "./communityRepository";
import { dearV1Axios } from "@/libs/Axios/customAxios";

class CommunityRepositoryImpl implements CommunityRepository {
  public async getAllCommunity(page: number): Promise<CommunityDataResponse> {
    const { data } = await dearV1Axios.get(`/community?page=${page}&size=10`);
    return data;
  }

  public async getMyCommunity(page: number): Promise<CommunityPostArticlesResponse> {
    const { data } = await dearV1Axios.get(`/community?page=${page}&size=10`);
    return data;
  }

  public async postCommunity(params: PostCommunityParams): Promise<PostCommunityResponse> {
    const { data } = await dearV1Axios.post("/community", params);
    return data;
  }

  public async putCommunity(params: PutCommunityParams): Promise<void> {
    await dearV1Axios.put(`/community`, params);
  }

  public async postMultiPartCommunityById(params: PostImageParams): Promise<void> {
    const { id, files } = params;
    await dearV1Axios.post(`/community/${id}`, files);
  }
}

const communityRepositoryImpl = new CommunityRepositoryImpl();
export default communityRepositoryImpl;
