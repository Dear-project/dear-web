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
  
    // reviewsQuery가 배열이므로 첫 번째 쿼리의 결과를 가져옵니다.
    const reviews = reviewsQuery[0];
  
    // 데이터가 준비되지 않았거나, 에러가 발생한 경우를 체크
    if (reviews.isLoading || reviews.isError) {
      return null; // 필요에 따라 로딩 상태나 에러 상태에 대한 처리를 추가할 수 있습니다.
    }
  
    const reviewData = reviews.data;
  
    if (reviewData && reviewData.data && reviewData.data.length > 0) {
      return reviewData;
    }
  
    return null; // 리뷰가 없거나 데이터를 찾지 못한 경우
  };

  return { getProfessorList, getProfessorDetail, postMatching, getReviews };
};

export default useMatching;
