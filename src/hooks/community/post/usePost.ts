import { PostIdAtom, usePostIdStore } from "@/store/community/community.store";
import dearToast from "@/libs/Swal/Swal";
import {
  useAllGetCommunityQuery,
  useGetCommunityById,
  useGetMyArticles,
  usePostCommunity,
} from "@/queries/community/community.query";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { useGetCommentById } from "@/queries/community/comment/comment.query";

const usePost = () => {
  const router = useRouter();
  const [writeId, setWritetId] = useRecoilState(PostIdAtom);

  const mutation = usePostCommunity();
  const getAllCommunity = (page: number) => {
    const [{ data: communityList }] = useAllGetCommunityQuery(page);
    return communityList;
  };

  const getCommunityById = (id: number) => {
    const [{ data: communityByIdList }] = useGetCommunityById(id);
    return communityByIdList;
  };

  const GetMyArticles = (page: number) => {
    const [{ data: myArticlesData }] = useGetMyArticles(page);
    return myArticlesData;
  };

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
    GetMyArticles,
    getAllCommunity,
    getCommunityById,
    setWrite,
    getCommentById,
  };
};

export default usePost;
