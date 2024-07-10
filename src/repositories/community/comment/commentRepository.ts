import { CommentByIdResponse } from "../../../types/community/comment/comment.types";

export interface CommentRepository {
  postComment(commentParmas: CommentParams): Promise<void>;
  postSubComment(commentParmas: CommentParams): Promise<void>;
  getCommentById(idParams: number): Promise<CommentByIdResponse>;
  deleteComment(idParams: number): Promise<void>;
  deleteSubComment(subCommentId: number): Promise<void>;
}

export interface CommentParams {
  content: string;
  id: number;
}
