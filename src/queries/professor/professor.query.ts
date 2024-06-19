import { useQueries } from "react-query";
import professorRepositoryImpl from "src/Repositories/professor/professorRepostoryImpl";
import { QUERY_KEYS } from "../QueryKey";

export const useProfessorQuery = (page: number) =>
  useQueries([
    {
      queryKey: [QUERY_KEYS.matching.matching],
      queryFn: () => professorRepositoryImpl.getProfessor(page),
      suspense: true,
    },
  ]);
