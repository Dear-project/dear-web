import {
  CommunityDataByIdResponse,
  CommunityDataResponse,
  CommunityPostArticlesResponse,
  PostCommunityResponse,
} from "@/types/community/post/post.types";
import { PatchCommunityParams, PostImageParams } from "../communityRepository";

export interface ProfessorCommunityRepository {
  getAllCommunity(page: number): Promise<CommunityDataResponse>;
  postCommunity(): Promise<PostCommunityResponse>;
  getCommunityById(id: number): Promise<CommunityDataByIdResponse>;
  patchCommunity(params: PatchCommunityParams): Promise<void>;
  postMultiPartCommunityById(params: PostImageParams): Promise<void>;
  getMyCommunity(page: number): Promise<CommunityPostArticlesResponse>;
}
