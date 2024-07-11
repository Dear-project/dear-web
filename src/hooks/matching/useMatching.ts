import { useGetProfileInfo } from "@/queries/profile/query";
import { useProfessorQuery } from "src/queries/professor/professor.query";
import { usePostMatching } from "@/queries/matching/matching.query";
import { useRouter } from "next/navigation";
import dearToast from "@/libs/Swal/Swal";

const useMatching = () => {
  const router = useRouter();
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

  const postMatchingMuation = usePostMatching();

  const postMatching = (subjectId: number) => {
    postMatchingMuation.mutate(subjectId, {
      onSuccess: () => {
        router.push("/chat");
      },
      onError: () => {
        dearToast.errorToast("알수없는 문제가 발생하였습니다.");
      },
    });
  };

  return { getProfessorList, getProfessorDetail, postMatching };
};

export default useMatching;
