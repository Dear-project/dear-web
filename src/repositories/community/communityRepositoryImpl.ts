import {
  CommunityDataByIdResponse,
  CommunityDataResponse,
  CommunityPostArticlesResponse,
  PostCommunityResponse,
} from "@/types/community/post/post.types";
import { CommunityRepository, PatchCommunityParams, PostCommunityParams, PostImageParams } from "./communityRepository";
import { dearV1Axios } from "@/libs/axios/customAxios";
import axios from "axios";
import token from "@/libs/token/token";
import CONFIG from "../../config/config.json";
import { ACCESS_TOKEN_KEY } from "@/constants/token/token.constants";

class CommunityRepositoryImpl implements CommunityRepository {
  public async getAllCommunity(page: number): Promise<CommunityDataResponse> {
    const { data } = await dearV1Axios.get(`/community?page=${page}&size=100`);
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

  public async getCommunityById(id: number): Promise<CommunityDataByIdResponse> {
    const { data } = await dearV1Axios.get(`/community/${id}`);
    return data;
  }

  public async patchCommunity(params: PatchCommunityParams): Promise<void> {
    const { id, data } = params;
    await dearV1Axios.patch(`/community/${id}`, data);
  }

  public async postMultiPartCommunityById(params: PostImageParams): Promise<void> {
    const { id, files } = params;
    console.log(files);
    await axios.post(`${CONFIG.serverUrl}/community/${id}`, files, {
      headers: {
        Authorization: token.getToken(ACCESS_TOKEN_KEY),
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

const communityRepositoryImpl = new CommunityRepositoryImpl();
export default communityRepositoryImpl;
