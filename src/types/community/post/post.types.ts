import { Response } from "@/types/util/response.type";

export interface CommunityPostData {
  id: number;
  userId: number;
  title: string;
  content: string;
  createdDateTime: string;
  modifiedDateTime: string;
  imgPath: string;
}

export interface CommunityPostById {
  id: number;
  title: string;
  content: string;
  userId: number;
  imagePathList: string[];
  createdDateTime: string;
  modifiedDateTime: string;
}

export interface CommunityPostArticles {
  id: number;
  userId: number;
  title: string;
  content: string;
  createdDateTime: string;
  modifiedDateTime: string;
  imagePath: string;
}

export interface CommunityDataResponse extends Response {
  data: CommunityPostData[];
}

export interface PostCommunityResponse extends Response {
  data: {
    id: number;
  };
}

export interface CommunityDataByIdResponse extends Response {
  data: CommunityPostById[];
}

export interface CommunityPostArticlesResponse extends Response {
  data: CommunityPostArticles[];
}
