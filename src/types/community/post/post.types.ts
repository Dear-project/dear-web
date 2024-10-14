import { Response } from "@/types/util/response.type";

export interface CommunityPostData {
  id: number;
  userId: number;
  userName: string;
  title: string;
  content: string;
  createdDateTime: string;
  modifiedDateTime: string;
  comment: number;
  imagePath: string;
  profileImage: string;
}

export interface CommunityPostById {
  id: number;
  title: string;
  content: string;
  userId: number;
  userName: string;
  imagePathList: string[];
  createdDateTime: string;
  modifiedDateTime: string;
  profileImage: string;
}

export interface CommunityPostArticles {
  id: number;
  userId: number;
  userName: string;
  title: string;
  content: string;
  createdDateTime: string;
  modifiedDateTime: string;
  comment: number;
  imagePath: string;
  profileImage: string;
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
  data: CommunityPostById;
}

export interface CommunityPostArticlesResponse extends Response {
  data: CommunityPostArticles[];
}
