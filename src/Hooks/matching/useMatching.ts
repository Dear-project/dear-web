import { useEffect, useState } from "react";
import { dearV1Axios } from "src/libs/Axios/customAxios";
import { ProfessorData } from "src/types/matching/professor.types";

const useMatching = () => {
  const [professor, setProfessor] = useState<ProfessorData[]>([]);

  useEffect(() => {
    const onLoadProfessor = async () => {
      try {
        await dearV1Axios.get("/professor?page=1&size=100").then((res) => setProfessor(res.data.data));
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
