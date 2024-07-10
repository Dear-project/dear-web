import * as S from "./style";
import { remark } from "remark";
import html from "remark-html";
import { Dispatch, RefObject, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import Profile from "public/svgs/Avatar.svg";
import Photo from "public/svgs/photo.svg";
import Close from "public/svgs/close.svg";
import useProfileChange from "@/hooks/modal/useProfileChange";
import { useGetProfileInfo } from "@/queries/profile/query";
import SelectSchoolModal from "@/components/common/selectSchoolModal/index";
import SelectMajorModal from "@/components/common/selectMajorModal/index";
import { useSchool } from "@/hooks/firstLogin/useSchool";

interface ProfileModalProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  modalRef?: RefObject<HTMLDivElement>;
}

const ProfileModal = ({ setModal, modalRef }: ProfileModalProps) => {
  const { ...modal } = useProfileChange();
  const { data } = useGetProfileInfo();
  const { isNext } = useSchool();
  return (
    <>
      <S.layout ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <S.Boxlayout>
          <Image
            onClick={() => setModal(false)}
            src={Close}
            alt=""
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "20px",
              right: "20px",
              cursor: "pointer",
            }}
          />
          <S.ProfileTextBox>
            <S.ProfileFix>프로필 </S.ProfileFix>
            <S.ProfileText>자신의 정보를 수정할 수 있습니다.</S.ProfileText>
          </S.ProfileTextBox>
          <S.ProfileImgBox>
            <S.ProfileImgText>프로필 사진</S.ProfileImgText>
            <S.ProfileImgBunddle>
              <div>
                <Image
                  id="profile"
                  src={data?.data.img ? data?.data.img : Profile}
                  alt="프로필"
                  width={130}
                  height={130}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <S.Label htmlFor="file_upload">
                <div>
                  <Image src={Photo} alt="" />
                </div>
              </S.Label>
              <S.InputImg
                type="file"
                accept=".jpg, .png, .jpeg"
                id="file_upload"
                onChange={modal.handleProfileChange}
              />
            </S.ProfileImgBunddle>
          </S.ProfileImgBox>
          <S.ChangeInput>
            <S.InputBox>
              <S.InputText>학교</S.InputText>
              <S.TextBox>
                <S.TextBox>
                  <S.FixBtn onClick={modal.handleIsOpen}>수정하기</S.FixBtn>
                </S.TextBox>
              </S.TextBox>
            </S.InputBox>
            <S.InputBox>
              <S.InputText>{data?.data.role === "PROFESSOR" ? "학과" : "관심 학과"}</S.InputText>
              <input type="text" value={data?.data.mclass} />
              <div></div>
            </S.InputBox>
            <S.InputBox>
              <S.InputText>현재 비밀번호</S.InputText>
              <input
                type="text"
                value={modal.passwordData.oldPassword}
                name="oldPassword"
                onChange={modal.handlePasswordChange}
              />
              <S.InputText>새 비밀번호</S.InputText>
              <input
                type="text"
                value={modal.passwordData.newPassword}
                name="newPassword"
                onChange={modal.handlePasswordChange}
              />
              <div>
                <button>비밀번호변경</button>
              </div>
            </S.InputBox>
          </S.ChangeInput>
        </S.Boxlayout>
      </S.layout>
      <SelectSchoolModal isOpen={modal.isOpen} />
      <SelectMajorModal isOpen={isNext} />
    </>
  );
};

export default ProfileModal;
