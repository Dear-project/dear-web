import { Response } from "@/types/util/response.type";

export interface CommentById {
  commentId: number;
  content: string;
  commentor: string;
  subComments: [
    {
      commentId: number;
      content: string;
      commentor: string;
    },
  ];
}

export interface CommentByIdResponse extends Response {
  data: CommentById[];
}
