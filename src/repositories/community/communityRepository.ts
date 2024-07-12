import {
  CommunityDataResponse,
  CommunityPostArticlesResponse,
  PostCommunityResponse,
  CommunityDataByIdResponse,
} from "@/types/community/post/post.types";

export interface CommunityRepository {
  getAllCommunity(page: number): Promise<CommunityDataResponse>;
  postCommunity(): Promise<PostCommunityResponse>;
  getCommunityById(id: number): Promise<CommunityDataByIdResponse>;
  patchCommunity(params: PatchCommunityParams): Promise<void>;
  postMultiPartCommunityById(params: PostImageParams): Promise<void>;
  getMyCommunity(page: number): Promise<CommunityPostArticlesResponse>;
}


export interface PatchCommunityParams {
  id: number;
  data: {
    title: string;
    content: string;
  };
}

export interface PostImageParams {
  id: number;
  files:FormData;
}
