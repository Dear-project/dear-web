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
import { useState } from "react";

const usePost = () => {
  const router = useRouter();
  const [writeId, setWritetId] = useRecoilState(PostIdAtom);

  const mutation = usePostCommunity();
  const getAllCommunity = (page: number) => {
    const [{ data: communityList }] = useAllGetCommunityQuery(page);
    if (communityList !== null && communityList !== undefined && communityList.data.length > 0) {
      return communityList;
    }
  };

  const getCommunityById = (id: number) => {
    const [{ data: communityByIdList }] = useGetCommunityById(id);
    return communityByIdList;
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

  return {
    writeId,
    GetMyArticles,
    getAllCommunity,
    getCommunityById,
    setWrite,
  };
};

export default usePost;
