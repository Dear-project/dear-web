import { useMutation, useQuery } from "react-query";
import { QUERY_KEYS } from "../QueryKey";
import matchingRepositoryImpl from "../../repositories/matching/matchingRepositoryImpl";
import { pageRequest } from "@/repositories/matching/matchingRepository";
import { MatchingResponse } from "@/types/matching/matching.type";
import { AxiosError } from "axios";


export const usePostMatching = () => {
  const mutation = useMutation((subjectId: number) => matchingRepositoryImpl.postMatching(subjectId));
  return mutation;
};
export const useGetMatching = (pageRequest:pageRequest)=>{
  return useQuery<MatchingResponse, AxiosError>({
    queryKey: [QUERY_KEYS.matching.matching],
    queryFn : ()=>matchingRepositoryImpl.getMatchingList(pageRequest),
    staleTime: 60 * 10000, 
    cacheTime: 5 * 60 * 1000, 
    refetchInterval: 3600000, 
    refetchOnWindowFocus: true, 
  })
  
}
 export const useMatchingAccept = ()=>{
  const mutation = useMutation((subjectId:number) => matchingRepositoryImpl.matchingAccept(subjectId));
  return mutation;
}
export const useMatchingReject = ()=>{
  const mutation = useMutation((subjectId: number) => matchingRepositoryImpl.matchingReject(subjectId));
  return mutation;
}