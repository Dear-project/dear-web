import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { dearV1Axios } from "src/libs/Axios/customAxios";
import { ProfessorData } from "src/types/matching/professor.types";

const useMatching = () => {
  const [professor, setProfessor] = useState<ProfessorData[]>([]);
  const [professorId, setProfessorId] = useState<number>();

  useEffect(() => {
    const onLoadProfessor = async () => {
      try {
        await dearV1Axios.get("/professor?page=1&size=100").then((res) => {
          setProfessor(res.data.data);
          setProfessorId(res.data.data.professorId);
        });
      } catch (error) {
        console.log(error);
      }
    };

    onLoadProfessor();
  }, []);

  return {
    professor,
  };
};

export default useMatching;
