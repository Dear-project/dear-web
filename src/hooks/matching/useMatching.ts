import { useGetProfileInfo } from "@/queries/profile/query";
import { useGetProfessorDetailQuery, useGetReviews, useProfessorQuery } from "@/queries/professor/professor.query";
import { usePostMatching } from "@/queries/matching/matching.query";
import { useParams, useRouter } from "next/navigation";
import dearToast from "@/libs/Swal/Swal";
import { useCallback } from "react";
import { ErrorTransform } from "@/utils/transform/error/errorTransform";
import { AxiosError } from "axios";

const useMatching = () => {
  const router = useRouter();

  const getProfessorList = (page: number) => {
    const professorListQuery = useProfessorQuery(page);
    const professorList = professorListQuery.data;

    if (professorList !== undefined && professorList !== null && professorList.data.length > 0) {
      return professorList;
    }
  };

  const getProfessorDetail = useCallback((id: number) => {
    const professorDetailQuery = useGetProfessorDetailQuery(id);
    const professorDetailData = professorDetailQuery.data;

    if (professorDetailData?.data !== undefined && professorDetailData.data !== null) {
      return professorDetailData;
    }
  }, []);

  const postMatchingMuation = usePostMatching();

  const postMatching = (subjectId: number) => {
    postMatchingMuation.mutate(subjectId, {
      onSuccess: () => {
        router.push("/chat");
      },
      onError: (error) => {
        dearToast.errorToast(ErrorTransform((error as AxiosError).status!));
      },
    });
  };

const getReviews = (page: number, targetId: number) => {
  const params = {
    page: page,
    targetId: targetId,
  };
  const reviewsQuery = useGetReviews(params);

  
  const reviews = reviewsQuery[0];

  
  if (reviews.isLoading || reviews.isError) {
    return null; 
  }

  const reviewData = reviews.data;

  if (reviewData && reviewData.data && reviewData.data.length > 0) {
    return reviewData;
  }

  return null; 
};

  return { getProfessorList, getProfessorDetail, postMatching, getReviews };
};

export default useMatching;
