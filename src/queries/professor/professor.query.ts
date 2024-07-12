import { useQueries } from "react-query";
import professorRepositoryImpl from "src/repositories/professor/professorRepostoryImpl";
import { QUERY_KEYS } from "../QueryKey";
import { reviewRequestParams } from "@/repositories/professor/professorRepository";

export const useProfessorQuery = (page: number) =>
  useQueries([
    {
      queryKey: [QUERY_KEYS.matching.matching],
      queryFn: () => professorRepositoryImpl.getProfessor(page),
      suspense: true,
    },
  ]);

export const useGetProfessorDetailQuery = (id: number) =>
  useQueries([
    {
      queryKey: [QUERY_KEYS.professor.getProfessor, id],
      queryFn: () => professorRepositoryImpl.getProfessorDetail(id),
      suspense: true,
    },
  ]);

export const useGetReviews = (reviewParams: reviewRequestParams) =>
  useQueries([
    {
      queryKey: [QUERY_KEYS.professor.review],
      queryFn: () => professorRepositoryImpl.getReview(reviewParams),
      suspense: true,
    },
  ]);
