import * as S from "./style";
import { remark } from "remark";
import html from "remark-html";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import Profile from "public/svgs/Avatar.svg";
import Photo from "public/svgs/photo.svg";
import Close from "public/svgs/close.svg";
import useProfileChange from "@/hooks/modal/useProfileChange";
import { useGetProfileInfo } from "@/queries/profile/query";
import SelectSchoolModal from "@/components/common/selectSchoolModal/index";
import SelectMajorModal from "@/components/common/selectMajorModal/index";

interface ProfileModalProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  modalRef?: RefObject<HTMLDivElement>;
}

const ProfileModal = ({ setModal, modalRef }: ProfileModalProps) => {
  const { ...modal } = useProfileChange();
  const { data } = useGetProfileInfo();

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

          <S.ProfileImgBox>
            <S.ProfileImgBunddle>
              <div>
                <Image
                  id="profile"
                  src={modal.image !== undefined ? modal.image : Profile}
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
                onChange={modal.changeProfileImage}
              />
            </S.ProfileImgBunddle>
            <S.InputText>{data?.data.name || "홍길동"}</S.InputText>
          </S.ProfileImgBox>
          <S.ChangeInput>
            <S.InputBox>
              <S.InputText>학교</S.InputText>

              <S.TextBox>
                <S.Input type="text" value={data?.data.schoolName} />
                <S.TextBox>
                  <S.FixBtn>수정하기</S.FixBtn>
                </S.TextBox>
              </S.TextBox>
            </S.InputBox>
            <S.InputBox>
              <S.InputText>
                {data?.data.role === "PROFESSOR" ? "학과" : "관심 학과"}
              </S.InputText>

              <S.TextBox>
                <S.Input type="text" value={data?.data.mclass} />
                <S.TextBox>
                  <S.FixBtn>수정하기</S.FixBtn>
                </S.TextBox>
              </S.TextBox>
            </S.InputBox>
            <S.PasswordBox>
              <S.InputText>현재 비밀번호</S.InputText>
              <S.PasswordInput
                type="text"
                value={modal.passwordData.oldPassword}
                name="oldPassword"
                onChange={modal.handlePasswordChange}
                placeholder="현재 비밀번호를 적어주세요"
              />
              <S.InputText>새 비밀번호</S.InputText>
              <S.PasswordInput
                type="text"
                value={modal.passwordData.newPassword}
                name="newPassword"
                onChange={modal.handlePasswordChange}
                placeholder="새로운 비밀번호를 적어주세요"
              />
            </S.PasswordBox>

            <S.FixEnd>비밀번호변경</S.FixEnd>
          </S.ChangeInput>
          <div>
            {/* <S.FixEnd onClick={handleSaveChanges}>수정완료</S.FixEnd> */}
          </div>
        </S.Boxlayout>
      </S.layout>
    </>
  );
};

export default ProfileModal;
