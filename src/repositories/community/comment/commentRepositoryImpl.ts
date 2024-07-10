import { CommentByIdResponse } from "../../../types/community/comment/comment.types";
import { CommentParams, CommentRepository } from "./commentRepository";
import { dearV1Axios } from "@/libs/axios/customAxios";

class CommentRepositoryImpl implements CommentRepository {
  public async postComment(commentParmas: CommentParams): Promise<void> {
    await dearV1Axios.post("/comment", commentParmas);
  }

  public async postSubComment(commentParmas: CommentParams): Promise<void> {
    await dearV1Axios.post("/comment/sub", commentParmas);
  }

  public async getCommentById(idParams: number): Promise<CommentByIdResponse> {
    const { data } = await dearV1Axios.get(`/comment/${idParams}`);
    return data;
  }

  public async deleteComment(idParams: number): Promise<void> {
    await dearV1Axios.delete(`/comment/${idParams}`);
  }

  public async deleteSubComment(subCommentId: number): Promise<void> {
    await dearV1Axios.delete(`/comment/sub/${subCommentId}`);
  }
}

export default new CommentRepositoryImpl();