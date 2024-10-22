"use client";
import dearToast from "../../libs/Swal/Swal";
import React, { useCallback, useState } from "react";
import { PasswordDataType, UserProfile } from "../../types/profile/profile.type";
import { usePatchPassword, usePostEditSchoolAndMajor, usePostProfileImage } from "@/queries/profile/query";
import token from "../../libs/token/tokens";
import { useRouter } from "next/navigation";
import { EditSchoolAndMajorParams } from "@/repositories/profile/ProfileRepository";
import { ErrorTransform } from "@/utils/transform/error/errorTransform";
import { AxiosError } from "axios";
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
        onError: (error) => {
          dearToast.errorToast(ErrorTransform((error as AxiosError).status!));
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
      onError: (error) => {
        dearToast.errorToast(ErrorTransform((error as AxiosError).status!));
      },
    });
  };

  const postEditSchoolAndMajor = usePostEditSchoolAndMajor();
  const handleChangeSchoolAndMajor = () => {
    postEditSchoolAndMajor.mutate(
      { school: UserData.schoolName, major: UserData.mclass, introduce: "", stsMessage: "" },
      {
        onSuccess: () => {
          dearToast.sucessToast("정보 변경에 성공하였습니다.");
        },
        onError: () => {
          dearToast.errorToast("알 수 없는 오류가 발생하였습니다.");
        },
      },
    );
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
    handleChangeSchoolAndMajor,
  };
};

export default useProfileChange;
