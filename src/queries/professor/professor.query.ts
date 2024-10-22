import { UseQueryOptions, UseQueryResult, useQueries, useQuery } from "react-query";
import professorRepositoryImpl from "src/repositories/professor/professorRepostoryImpl";
import { QUERY_KEYS } from "../QueryKey";
import { reviewRequestParams } from "@/repositories/professor/professorRepository";
import { ProfessorDetailData, ProfessorResponse } from "@/types/matching/professor.types";
import { AxiosError } from "axios";

export const useProfessorQuery = (
  page: number,
  options?: UseQueryOptions<ProfessorResponse, AxiosError, ProfessorResponse, string>,
): UseQueryResult<ProfessorResponse, AxiosError> =>
  useQuery(QUERY_KEYS.professor.professor, () => professorRepositoryImpl.getProfessor(page), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  });

export const useGetProfessorDetailQuery = (
  id: number,
  options?: UseQueryOptions<ProfessorDetailData, AxiosError, ProfessorDetailData, (string | number)[]>,
): UseQueryResult<ProfessorDetailData, AxiosError> =>
  useQuery(QUERY_KEYS.professor.getProfessor(id), () => professorRepositoryImpl.getProfessorDetail(id), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  });

export const useGetReviews = (reviewParams: reviewRequestParams) =>
  useQueries([
    {
      queryKey: [QUERY_KEYS.professor.review],
      queryFn: () => professorRepositoryImpl.getReview(reviewParams),
      suspense: true,
    },
  ]);
