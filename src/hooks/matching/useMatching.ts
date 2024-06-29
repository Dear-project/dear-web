import { useGetProfileInfo } from "@/queries/profile/query";
import { useProfessorQuery } from "src/queries/professor/professor.query";

const useMatching = () => {
  const getProfessorList = (page: number) => {
    const [{ data: professorList }] = useProfessorQuery(page);

    if (professorList !== undefined && professorList !== null && professorList.data.length > 0) {
      return professorList;
    }
  };

  const getProfessorDetail = () => {
    const { data: professorDetailData } = useGetProfileInfo();
    return professorDetailData;
  };

  return { getProfessorList, getProfessorDetail };
};

export default useMatching;
