import React from "react";
import * as S from "../postDetail/style";
import Image from "next/image";
import MoreImg from "@/asset/MoreImg.svg";
import Profile from "@/asset/Profile.svg";
import Send from "@/asset/send.svg";
import { useGetCommentById } from "@/queries/community/comment/comment.query";
import usePost from "@/hooks/community/post/usePost";

const Comment = ({ communityId }: { communityId: number }) => {
  const { data: commentList } = useGetCommentById(communityId);
  const { comment, handleComment, postComment } = usePost();

  return (
    <S.CommentWrap>
      <S.CommentWrapTitle>댓글</S.CommentWrapTitle>
      <S.CommentContentWrap>
        {Array.isArray(commentList?.data) &&
          commentList?.data.map((comment) => (
            <S.Comment>
              <div key={comment.commentId}>
                <Image src={Profile} alt="프로필 이미지" width={50} height={50} />
                <div>
                  <h1>{comment.commentor}</h1>
                  <span>{comment.content}</span>
                  <div>
                    <span>2024.10.08. 오후 17:25</span>
                    <span>답글 달기</span>
                  </div>
                </div>
                <Image src={MoreImg} alt="더보기 " />
              </div>
            </S.Comment>
          ))}
        <S.ReComment>
          <div>
            <Image src={Profile} alt="프로필 이미지" width={50} height={50} />
            <div>
              <h1>김가영</h1>
              <span>히히히히</span>
              <div>
                <span>2024.10.08. 오후 17:25</span>
                <span>답글 달기</span>
              </div>
            </div>
            <Image src={MoreImg} alt="더보기 " />
          </div>
        </S.ReComment>
      </S.CommentContentWrap>
      <S.CommentInputWrap>
        <input type="text" placeholder="댓글을 남겨보세요" value={comment} onChange={handleComment} />
        <Image src={Send} alt="보내기" width={24} height={24} onClick={() => postComment(comment, +communityId)} />
      </S.CommentInputWrap>
    </S.CommentWrap>
  );
};

export default Comment;