import React, { useState, Dispatch, SetStateAction } from "react";
import Profile from "public/svgs/Avatar.svg";
import * as S from "./style";
import Image from "next/image";
import Photo from "public/svgs/photo.svg";
import Close from "public/svgs/close.svg";

interface ModalProps {
  setModal: Dispatch<SetStateAction<boolean>>;
}

const ProfileModal: React.FC<ModalProps> = ({ setModal }) => {
  return (
    <S.layout>
      <S.Boxlayout>
        <Image
          onClick={() => {
            setModal(false);
          }}
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
          <S.ProfileFix>프로필 수정</S.ProfileFix>
          <S.ProfileText>자신의 정보를 수정할 수 있습니다.</S.ProfileText>
        </S.ProfileTextBox>
        <S.ProfileImgBox>
          <S.ProfileImgText>프로필 사진</S.ProfileImgText>
          <S.ProfileImgBunddle>
            <div>
              <Image
                id="profile"
                src={Profile}
                alt="프로필"
                width={130}
                height={130}
                style={{ borderRadius: "100%" }}
              />
            </div>
            <S.Label htmlFor="file_upload">
              <div>
                <Image src={Photo} alt="" />
              </div>
            </S.Label>
            <S.InputImg
              type="file"
              accept="image/jpg, image/png, image/jpeg"
              id="file_upload"
            />
          </S.ProfileImgBunddle>
          <S.ChangeDefultImg>기본 프로필로 변경</S.ChangeDefultImg>
        </S.ProfileImgBox>
        <S.ChangeInput>
          <S.InputBox>
            <S.InputText>학교 및 학과</S.InputText>
            <S.TextBox>
              <S.SpanChangeInput>OO대학교 XX학과</S.SpanChangeInput>
              <S.FixBtn>수정하기</S.FixBtn>
            </S.TextBox>
          </S.InputBox>
          <S.InputBox>
            <S.InputText>비밀번호</S.InputText>
            <S.TextBox>
              <S.SpanChangeInput>......</S.SpanChangeInput>
              <S.FixBtn>수정하기</S.FixBtn>
            </S.TextBox>
          </S.InputBox>
          <S.InputBox>
            <S.InputText>전문과목</S.InputText>
            <S.TextBox>
              <S.SpanChangeInput>전문과목</S.SpanChangeInput>
              <S.FixBtn>수정하기</S.FixBtn>
            </S.TextBox>
          </S.InputBox>
        </S.ChangeInput>
        <div>
          <S.FixEnd
            onClick={() => {
              setModal(false);
            }}
          >
            수정완료
          </S.FixEnd>
        </div>
      </S.Boxlayout>
    </S.layout>
  );
};

export default ProfileModal;
