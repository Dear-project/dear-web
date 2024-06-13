import { useProfessorQuery } from "src/queries/professor/professor.query";

class UseMatching {
  public getProfessorList = (page: number) => {
    const [{ data: professorList }] = useProfessorQuery(page);

    return professorList;
  };
}

const useMatching = new UseMatching();
export default useMatching;
