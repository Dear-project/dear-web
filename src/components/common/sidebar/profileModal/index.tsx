import { useState } from "react";
import * as S from "./style";
import Image from "next/image";
import Profile from "public/svgs/Avatar.svg";
import Photo from "public/svgs/Write.svg";
import Close from "public/svgs/close.svg";
import useProfileChange from "@/hooks/modal/useProfileChange";
import { useGetProfileInfo } from "@/queries/profile/query";
import Modal from "@/components/common/modal/index";
import SelectSchool from "./selectSchool";
import SelectMajor from "./selectMajor";

interface ProfileModalProps {
  isOpen: boolean;
  close: () => void;
  handleProfileClick: () => void;
}

const ProfileModal = ({ isOpen, close, handleProfileClick }: ProfileModalProps) => {
  const [isCorrection, setCorrection]= useState(true);
  const { ...modal } = useProfileChange();
  const { data } = useGetProfileInfo();

  const handleChange = ()=>{
    setCorrection((prev)=>!prev)
  }

  return (
    <>
      <Modal isOpen={isOpen} close={close}>
        <S.Boxlayout onClick={(e) => e.stopPropagation()}>
          <Image
            onClick={handleProfileClick}
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
                  src={data?.data.imgPath ? data?.data.imgPath : Profile}
                  alt="프로필"
                  width={100}
                  height={100}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <S.Label htmlFor="file_upload">
                  <Image src={Photo} alt="" />
              </S.Label>
              <S.InputImg type="file" accept=".jpg, .png, .jpeg" id="file_upload" onChange={modal.changeProfileImage} />
            </S.ProfileImgBunddle>
          </S.ProfileImgBox>
          <S.ChangeInput>
            <S.InputBox>
              <S.InputText>학교</S.InputText>
              <div>
                {
                  isCorrection ?
                <span onClick={handleChange}>{data?.data.schoolName}</span>
                :<SelectSchool/>
                }
                
               
              </div>
              <S.InputText>{data?.data.role === "PROFESSOR" ? "학과" : "관심 학과"}</S.InputText>
              <div>
             {
              isCorrection ? 
              <span onClick={handleChange}>{data?.data.schoolName}</span>
              : <SelectMajor/>
             }
              </div>
              
            </S.InputBox>
            <S.TextBox style={{ width: "700px" }}>
                <S.FixBtn onClick={handleChange}>{isCorrection? "수정하기" : "완료"}</S.FixBtn>
              </S.TextBox>
            {isCorrection ? <><S.InputBox style={{ background: "#F5F5F5" }}>
              <S.InputText>현재 비밀번호</S.InputText>
              <input
                type="password"
                value={modal.passwordData.oldPassword}
                name="oldPassword"
                onChange={modal.handlePasswordChange}
                placeholder="현재 비밀번호를 입력해주세요."
              />
              <S.InputText>새 비밀번호</S.InputText>
              <input
                type="password"
                value={modal.passwordData.newPassword}
                name="newPassword"
                onChange={modal.handlePasswordChange}
                placeholder="변경하시려는 비밀번호를 입력해주세요."
              />
            </S.InputBox>
            <S.FixBtn style={{ background: "#0E2764", width: "20%", color: "white" }} onClick={modal.changePassword}>
              비밀번호 변경
            </S.FixBtn>
          </> :
           ""}
          </S.ChangeInput>  
        </S.Boxlayout>
      </Modal>
    </>
  );
};

export default ProfileModal;
