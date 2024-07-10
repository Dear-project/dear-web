"use client";
import dearToast from "../../libs/Swal/Swal";
import React, { useCallback, useState } from "react";
import config from "../../config/config.json";
import {
  PasswordDataType,
  UserProfile,
} from "../../types/profile/profile.type";
import { dearV1Axios } from "../../libs/axios/customAxios";
import { usePatchPassword, usePostProfileImage } from "@/queries/profile/query";
const useProfileChange = () => {
  const [UserData, serUserData] = useState<UserProfile>({
    id: 0,
    email: "",
    name: "",
    role: "",
    schoolName: "",
    introduce: "",
    img: "",
    stsMessage: "",
    lclass: "",
    mclass: "",
  });
  const [image, setImage] = useState<string[]>([]);
  const [passwordData, setPasswordData] = useState<PasswordDataType>({
    oldPassword: "",
    newPassword: "",
  });

  const handleProfileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      serUserData((prev) => ({ ...prev, [name]: value }));
    },
    [serUserData]
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setPasswordData((prev) => ({ ...prev, [name]: value }));
    },
    [setPasswordData]
  );

  const passwordChangeMutation = usePatchPassword();

  const changePassword = () => {
    const passwordParams = {
      oldPassword: "",
      newPassword: "",
    };
    passwordChangeMutation.mutate(passwordParams);
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
      image: formData.get("image")!,
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

  return {
    passwordData,
    image,
    UserData,
    handleProfileChange,
    handlePasswordChange,
  };
};

export default useProfileChange;
