import { WriteData } from "@/types/community/write/write.types";
import axios from "axios";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import CONFIG from "src/config/config.json";

const useWrite = () => {
  const [writeData, setWriteData] = useState<WriteData>({
    title: "",
    content: "",
  });
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [image, setImage] = useState<string[]>([]);
  const [file, setFile] = useState<File[]>([]);
  const ImageRef = useRef<HTMLInputElement>(null);
  const FileRef = useRef<HTMLInputElement>(null);
  const formData = new FormData();

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

    setFile(fileArray);

    fileArray.forEach((file) => formData.append("file", file));
  };

  const handleFileClick = () => {
    FileRef.current?.click();
  };

  const onWrite = async () => {
    try {
      axios.post(`${CONFIG.serverUrl}`);
    } catch (error) {}
  };

  return {
    writeData,
    isClicked,
    ImageRef,
    FileRef,
    image,
    file,
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
