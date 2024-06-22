import { PostIdAtom } from "@/store/community/community.store";
import dearToast from "@/libs/Swal/Swal";
import { usePatchCommunity, usePostMultiPart } from "@/queries/community/community.query";
import { WriteData } from "@/types/community/write/write.types";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useRef, useState, ChangeEvent } from "react";
import { useRecoilValue } from "recoil";

const useWrite = () => {
  const [writeData, setWriteData] = useState<WriteData>({
    title: "",
    content: "",
  });

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [image, setImage] = useState<string[]>([]);
  const [file, setFile] = useState<File[]>([]);
  const [fileName, setFileName] = useState<string[]>([]);
  const id = useRecoilValue(PostIdAtom);
  const ImageRef = useRef<HTMLInputElement>(null);
  const FileRef = useRef<HTMLInputElement>(null);
  const formData = new FormData();
  const router = useRouter();

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
  const postPostMultiPartMutation = usePostMultiPart();

  const onWrite = async () => {
    const { title, content } = writeData;

    const params = {
      id: id,
      data: {
        title: title,
        content: content,
      },
    };

    patchCommunityMutation.mutate(params, {
      onSuccess: () => {
        dearToast.sucessToast("글 등록 성공!");
        router.back();
      },
      // Auth 브랜치에서 axios interceptor timedout 예외처리 하기
      onError: (error) => {
        const errorResponse = error as AxiosError;
        if (title.length < 0) {
          dearToast.infoToast("제목을 입력해주세요");
        } else if (content.length < 0) {
          dearToast.infoToast("내용을 입력해주세요");
        } else {
          dearToast.errorToast((errorResponse as AxiosError).message);
        }
      },
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
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

    fileArray.forEach((file) => formData.append("image", file));

    const params = {
      id: id,
      files: formData.get("image"),
    };

    postPostMultiPartMutation.mutate(params, {
      onError: () => {
        dearToast.errorToast("이미지 등록 실패");
        setImage([]);
      },
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    const fileArray = Array.prototype.slice.call(files);
    const fileNames = fileArray.map((file) => file.name);
    setFileName(fileNames);

    setFile(fileArray);

    fileArray.forEach((file) => formData.append("file", file));

    const params = {
      id: id,
      files: formData.get("file"),
    };

    postPostMultiPartMutation.mutate(params, {
      onError: () => {
        dearToast.errorToast("파일 업로드 실패");
      },
    });
  };

  const handleFileClick = () => {
    FileRef.current?.click();
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
    handleFileChange,
    handleFileClick,
  };
};

export default useWrite;
