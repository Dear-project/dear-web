import {
  CommunityDataByIdResponse,
  CommunityDataResponse,
  CommunityPostArticlesResponse,
  PostCommunityResponse,
} from "@/types/community/post/post.types";
import { Response } from "@/types/util/response.type";

export interface CommunityRepository {
  getAllCommunity(page: number): Promise<CommunityDataResponse>;
//   postCommunity(title: string, content: string): Promise<PostCommunityResponse>;
//   putCommunity(id: number, title: string, content: string): Promise<Response>;
//   getCommunityById(id: number): Promise<CommunityDataByIdResponse>;
//   postImageByCommunityById(id: number, files: File[]): Promise<Response>;
//   getMyCommunity(page: number): Promise<CommunityPostArticlesResponse>;
}
