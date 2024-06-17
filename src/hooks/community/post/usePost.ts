import { PostIdAtom } from "@/store/community/community.store";
import dearToast from "@/libs/Swal/Swal";
import { useAllGetCommunityQuery, useGetMyArticles, usePostCommunity } from "@/queries/community/community.query";
import { PostCommunityParams } from "@/repositories/community/communityRepository";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";

const usePost = () => {
  const router = useRouter();
  const [postId, setPostId] = useRecoilState(PostIdAtom);
  const mutation = usePostCommunity();
  const getAllCommunity = (page: number) => {
    const [{ data: communityList }] = useAllGetCommunityQuery(page);
    return communityList;
  };

  const GetMyArticles = (page: number) => {
    const [{ data: myArticlesData }] = useGetMyArticles(page);
    return myArticlesData;
  };

  const setWrite = () => {
    const param = {
      title: "",
      content: "",
    };
    mutation.mutate(param, {
      onSuccess: (res) => {
        setPostId(res.data);
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
    GetMyArticles,
    getAllCommunity,
    setWrite,
  };
};

export default usePost;
