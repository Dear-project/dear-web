import {
  CommunityDataByIdResponse,
  CommunityDataResponse,
  CommunityPostArticlesResponse,
  PostCommunityResponse,
} from "@/types/community/post/post.types";
import { PatchCommunityParams, PostImageParams } from "../communityRepository";
import dearV1Axios from "@/libs/axios/customAxios";
import { ProfessorCommunityRepository } from "./professorCommunityRepository";

class ProfessorCommunityRepositoryImpl implements ProfessorCommunityRepository {
  public async getAllCommunity(page: number): Promise<CommunityDataResponse> {
    const { data } = await dearV1Axios.get(`/community/professor?page=${page}&size=100`);
    return data;
  }

  public async getMyCommunity(page: number): Promise<CommunityPostArticlesResponse> {
    const { data } = await dearV1Axios.get(`/community/professor/my-articles?page=${page}&size=100`);
    return data;
  }

  public async postCommunity(): Promise<PostCommunityResponse> {
    const { data } = await dearV1Axios.post("/community/professor");
    return data;
  }

  public async getCommunityById(id: number): Promise<CommunityDataByIdResponse> {
    const { data } = await dearV1Axios.get(`/community/professor/${id}`);
    return data;
  }

  public async patchCommunity(params: PatchCommunityParams): Promise<void> {
    const { id, data } = params;
    await dearV1Axios.patch(`/community/professor/${id}`, data);
  }

  public async postMultiPartCommunityById(params: PostImageParams): Promise<void> {
    const { id, files } = params;
    await dearV1Axios.post(
      `/community/professor/${id}`,
      { files: files },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  }
}

const professorCommunityRepositoryImpl = new ProfessorCommunityRepositoryImpl();
export default professorCommunityRepositoryImpl;
