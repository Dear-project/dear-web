"use client";
import dearToast from "../../libs/Swal/Swal";
import React, { useCallback, useState } from "react";
import { PasswordDataType, UserProfile } from "../../types/profile/profile.type";
import { usePatchPassword, usePostProfileImage } from "@/queries/profile/query";
import token from "../../libs/token/tokens";
import { useRouter } from "next/navigation";
const useProfileChange = () => {
  const [UserData, serUserData] = useState<UserProfile>({
    id: 0,
    email: "",
    name: "",
    role: "",
    schoolName: "",
    introduce: "",
    imgPath: "",
    stsMessage: "",
    lclass: "",
    mclass: "",
  });
  const [image, setImage] = useState<string[]>([]);
  const [passwordData, setPasswordData] = useState<PasswordDataType>({
    oldPassword: "",
    newPassword: "",
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMajorOpen, setIsMajorOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleProfileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      serUserData((prev) => ({ ...prev, [name]: value }));
    },
    [serUserData],
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setPasswordData((prev) => ({ ...prev, [name]: value }));
    },
    [setPasswordData],
  );

  const passwordChangeMutation = usePatchPassword();

  const changePassword = () => {
    const passwordParams = {
      oldPassword: passwordData.oldPassword,
      newPassword: passwordData.newPassword,
    };
    if (passwordData.oldPassword !== passwordData.newPassword) {
      passwordChangeMutation.mutate(passwordParams, {
        onSuccess: () => {
          dearToast.sucessToast("비밀번호가 성공적으로 변경되었습니다.");
          token.clearToken();
          router.push("/login");
        },
        onError: () => {
          dearToast.errorToast("알수없는 에러가 발생하였습니다.");
        },
      });
    }
  };

  const postImageChange = usePostProfileImage();
  const formData = new FormData();
  const changeProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      file: formData.get("image")!,
    };

    postImageChange.mutate(params, {
      onSuccess: () => {
        dearToast.sucessToast("이미지 변경에 성공하였습니다.");
      },
      onError: () => {
        dearToast.errorToast("알수없는 오류가 발생하였습니다");
      },
    });
  };

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMajorOpen = () => {
    setIsMajorOpen((prev) => !prev);
  };

  return {
    passwordData,
    image,
    UserData,
    isOpen,
    isMajorOpen,
    changeProfileImage,
    handleProfileChange,
    handlePasswordChange,
    changePassword,
    handleIsOpen,
    handleMajorOpen,
  };
};

export default useProfileChange;
