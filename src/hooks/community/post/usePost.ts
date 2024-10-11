import { PostIdAtom } from "@/store/community/community.store";
import dearToast from "@/libs/Swal/Swal";
import {
  useAllGetCommunityQuery,
  useGetCommunityById,
  useGetMyArticles,
  usePostCommunity,
} from "@/queries/community/community.query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { useGetCommentById } from "@/queries/community/comment/comment.query";

const usePost = () => {
  const router = useRouter();
  const [writeId, setWritetId] = useRecoilState(PostIdAtom);

  const mutation = usePostCommunity();

  const setWrite = () => {
    mutation.mutate(undefined, {
      onSuccess: (res) => {
        setWritetId(res.data.id);
        router.push("/community/write");
      },
      onError: (error) => {
        const errorResponse = error as AxiosError;
        dearToast.errorToast(errorResponse.message);
      },
    });
  };

  const getCommentById = (communityId: number) => {
    const [{ data: commentList }] = useGetCommentById(communityId);
    if (commentList !== undefined && commentList !== null && commentList.data.length > 0) {
      return commentList;
    }
  };

  return {
    writeId,

    setWrite,
    getCommentById,
  };
};

export default usePost;
