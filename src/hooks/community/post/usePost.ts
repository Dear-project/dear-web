import { PostIdAtom, persistUsePostIdStore, usePostIdStore } from "@/store/community/community.store";
import dearToast from "@/libs/Swal/Swal";
import { useAllGetCommunityQuery, useGetMyArticles, usePostCommunity } from "@/queries/community/community.query";
import { PostCommunityParams } from "@/repositories/community/communityRepository";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { useState } from "react";

const usePost = () => {
  const router = useRouter();
  const [writeId, setWritetId] = useState<number>();

  const mutation = usePostCommunity();
  const getAllCommunity = (page: number) => {
    const [{ data: communityList }] = useAllGetCommunityQuery(page);
    return communityList;
  };

  const GetMyArticles = (page: number) => {
    const [{ data: myArticlesData }] = useGetMyArticles(page);
    return myArticlesData;
  };

  const handlePostId = (id: number) => {
    setPostId(id);
  };

  const setWrite = () => {
    const param = {
      title: "",
      content: "",
    };
    mutation.mutate(param, {
      onSuccess: (res) => {
        setWritetId(res.data.id);
        router.push("/community/write");
      },
      onError: (error) => {
        const errorResponse = error as AxiosError;
        dearToast.errorToast((errorResponse as AxiosError).message);
      },
    });
  };

  return {
    postId,
    writeId,
    GetMyArticles,
    getAllCommunity,
    setWrite,
    handlePostId,
  };
};

export default usePost;
