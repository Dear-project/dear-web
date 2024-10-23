import { PostIdAtom } from "@/store/community/community.store";
import dearToast from "@/libs/Swal/Swal";
import { usePatchCommunity, usePostMultiPart } from "@/queries/community/community.query";
import { WriteData } from "@/types/community/write/write.types";
import axios, { AxiosError } from "axios";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useRef, useState, ChangeEvent } from "react";
import { useRecoilValue } from "recoil";
import CONFIG from "@/config/config.json";
import token from "@/libs/token/tokens";
import { ACCESS_TOKEN_KEY } from "@/constants/token/token.constants";
import { ErrorTransform } from "@/utils/transform/error/errorTransform";
import { PostImageParams } from "@/repositories/community/communityRepository";
import { useLocation } from "react-router-dom";
import { ProfessorCheck } from "@/store/profile/profile.store";
import {
  usePatchProfessorCommunity,
  usePostProfessorMultiPart,
} from "@/queries/community/professor/professorCommunity.query";
import { useQueryClient } from "react-query";

const useWrite = () => {
  const [writeData, setWriteData] = useState<WriteData>({
    title: "",
    content: "",
  });

  const pathname = usePathname();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [image, setImage] = useState<string[]>([]);
  const [file, setFile] = useState<File[]>([]);
  const [fileName, setFileName] = useState<string[]>([]);
  const id = useRecoilValue(PostIdAtom);
  const ImageRef = useRef<HTMLInputElement>(null);
  const FileRef = useRef<HTMLInputElement>(null);
  const formData = new FormData();
  const router = useRouter();
  const isProfessor = useRecoilValue(ProfessorCheck);

  const handleWriteData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setWriteData((prev) => ({ ...prev, [name]: value }));
    },
    [writeData.title, writeData.content],
  );

  const onClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleImageClick = () => {
    ImageRef.current?.click();
  };

  const patchCommunityMutation = usePatchCommunity();
  const patchProfessorCommunityMutation = usePatchProfessorCommunity();
  const postPostMultiPartMutation = usePostMultiPart();
  const postPostProfessorMultipartMutation = usePostProfessorMultiPart();
  const queryClient = useQueryClient();
  const onWrite = async () => {
    const { title, content } = writeData;

    const params = {
      id: id,
      data: {
        title: title,
        content: content,
      },
    };

    if (!pathname.includes("/professor")) {
      patchCommunityMutation.mutate(params, {
        onSuccess: () => {
          dearToast.sucessToast("글 등록 성공!");
          router.back();
          queryClient.invalidateQueries("/community");
        },
        // Auth 브랜치에서 axios interceptor timedout 예외처리 하기
        onError: (error) => {
          if (title.length < 0) {
            dearToast.infoToast("제목을 입력해주세요");
          } else if (content.length < 0) {
            dearToast.infoToast("내용을 입력해주세요");
          } else {
            dearToast.errorToast(ErrorTransform((error as AxiosError).status!));
          }
        },
      });
    } else {
      patchProfessorCommunityMutation.mutate(params, {
        onSuccess: () => {
          dearToast.sucessToast("글 등록 성공!");
          queryClient.invalidateQueries("/community/professor");
          router.back();
        },
        // Auth 브랜치에서 axios interceptor timedout 예외처리 하기
        onError: (error) => {
          if (title.length < 0) {
            dearToast.infoToast("제목을 입력해주세요");
          } else if (content.length < 0) {
            dearToast.infoToast("내용을 입력해주세요");
          } else {
            dearToast.errorToast(ErrorTransform((error as AxiosError).status!));
          }
        },
      });
    }
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (!files) return;

    const fileArray: File[] = Array.from(files);
    const fileURLs: string[] = [];

    for (let i = 0; i < fileArray.length; i++) {
      const currentFile = fileArray[i];
      const imageURL = URL.createObjectURL(currentFile);
      fileURLs.push(imageURL);
    }

    setImage((prevImages) => [...prevImages, ...fileURLs]);

    // FormData 생성
    const formData = new FormData();
    fileArray.forEach((file) => formData.append("files", file)); // 키를 'files'로 설정

    if (!pathname.includes("/professor")) {
      postPostMultiPartMutation.mutate(
        {
          id: id,
          files: formData.get("files")!,
        },
        {
          onSuccess: () => {
            // 성공 시 처리
          },
        },
      );
    } else {
      postPostProfessorMultipartMutation.mutate({
        id: id,
        files: formData.get("files")!,
      });
    }
  };

  return {
    writeData,
    isClicked,
    file,
    ImageRef,
    FileRef,
    image,
    setImage,
    onClick,
    handleWriteData,
    onWrite,
    handleImageChange,
    handleImageClick,
  };
};

export default useWrite;
