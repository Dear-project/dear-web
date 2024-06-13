import { dearV1Axios } from "@/libs/Axios/customAxios";
import { WriteData } from "@/types/community/write/write.types";
import axios from "axios";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import dearToast from "@/libs/Swal/Swal";
const useWrite = () => {
  const [writeData, setWriteData] = useState<WriteData>({
    title: "",
    content: "",
  });

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [image, setImage] = useState<string[]>([]);
  const [file, setFile] = useState<File[]>([]);
  const [fileName, setFileName] = useState<string[]>([]);
  const [id, setId] = useState<number>();
  const ImageRef = useRef<HTMLInputElement>(null);
  const FileRef = useRef<HTMLInputElement>(null);
  const formData = new FormData();
  const router = useRouter();

  const handleData = useCallback(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setWriteData((prev) => ({ ...prev, [name]: value }));
    },
    [setWriteData],
  );

  const onClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleImageClick = () => {
    ImageRef.current?.click();
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

    console.log(image);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const fileArray = Array.prototype.slice.call(files);
    const fileNames = fileArray.map((file) => file.name);
    setFileName(fileNames);

    setFile(fileArray);

    fileArray.forEach((file) => formData.append("file", file));
  };

  const handleFileClick = () => {
    FileRef.current?.click();
  };

  const onWrite = async () => {
    const { title, content } = writeData;

    try {
      await dearV1Axios
        .post("/community", {
          title: title,
          content: content,
        })
        .then((res) => {
          setId(res.data.data);
          dearToast.sucessToast("글 등록 성공");
          router.push("/community");
        });
    } catch (error) {
      dearToast.errorToast("글 등록 실패");
    }
  };

  return {
    writeData,
    isClicked,
    ImageRef,
    FileRef,
    image,
    file,
    fileName,
    setImage,
    handleData,
    onClick,
    handleImageClick,
    handleFileClick,
    handleImageChange,
    handleFileChange,
    onWrite,
  };
};

export default useWrite;
