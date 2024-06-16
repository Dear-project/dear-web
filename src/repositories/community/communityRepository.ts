import {
  CommunityDataResponse,
  CommunityPostArticlesResponse,
  PostCommunityResponse,
} from "@/types/community/post/post.types";

export interface CommunityRepository {
  getAllCommunity(page: number): Promise<CommunityDataResponse>;
  postCommunity(params: PostCommunityParams): Promise<PostCommunityResponse>;
  //   getCommunityById(id: number): Promise<CommunityDataByIdResponse>;
  putCommunity(params: PutCommunityParams): Promise<void>;
  postMultiPartCommunityById(params: PostImageParams): Promise<void>;
  getMyCommunity(page: number): Promise<CommunityPostArticlesResponse>;
}

export interface PostCommunityParams {
  title: string;
  content: string;
}

export interface PutCommunityParams {
  id: number;
  title: string;
  content: string;
}

export interface PostImageParams {
  id: number;
  files: FileList;
}
