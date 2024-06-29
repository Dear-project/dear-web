"use client";
import dearToast from "../../libs/Swal/Swal";
import React, { useCallback, useState } from "react";
import config from "../../config/config.json";
import { ProfileType, UserProfile } from "../../types/profile/profile.type";
import { dearV1Axios } from "../../libs/axios/customAxios";
const useProfileChange = () => {
  const [UserData, serUserData] = useState<UserProfile>({
    id: 0,
    email: "",
    name: "",
    type: "STUDENT",
    schoolName: "",
    introduce: "",
    img: "",
    stsMessage: "",
    lclass: "",
    mclass: "",
  });

  const handleProfileChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const { value, name } = e.target;
      serUserData((prev) => ({ ...prev, [name]: value }));
    },
    [serUserData]
  );

  const handleEditProfileBtn = async () => {
    const { stsMessage, introduce } = UserData;
    if (stsMessage.length < 0 && introduce.length < 0) {
      dearToast.infoToast("상태메시지를 입력해주세요");
    }
    try {
      await dearV1Axios
        .post<ProfileType>(`${config.serverUrl}/profile`, {
          stsMessage: stsMessage,
          introduce: introduce,
        })
        .then(() => {
          dearToast.sucessToast("수정완료");
        });
    } catch (e) {
      dearToast.errorToast("응안됨");
    }
  };

  return {
    UserData,
    handleProfileChange,
    handleEditProfileBtn,
  };
};

export default useProfileChange;
