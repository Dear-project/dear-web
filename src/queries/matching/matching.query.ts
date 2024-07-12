import { useMutation, useQueries } from "react-query";
import { QUERY_KEYS } from "../QueryKey";
import matchingRepositoryImpl from "../../repositories/matching/matchingRepositoryImpl";

export const usePostMatching = () => {
  const mutation = useMutation((subjectId: number) => matchingRepositoryImpl.postMatching(subjectId));
  return mutation;
};
