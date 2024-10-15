import * as S from "./style";
import Image from "next/image";
import Profile from "public/svgs/Avatar.svg";
import Photo from "public/svgs/photo.svg";
import Close from "public/svgs/close.svg";
import useProfileChange from "@/hooks/modal/useProfileChange";
import { useGetProfileInfo } from "@/queries/profile/query";
import Modal from "@/components/common/modal/index";
import SelectMajorModal from "../../selectMajorModal";

interface ProfileModalProps {
  isOpen: boolean;
  close: () => void;
  handleProfileClick: () => void;
}

const ProfileModal = ({ isOpen, close, handleProfileClick }: ProfileModalProps) => {
  const { ...modal } = useProfileChange();
  const { data } = useGetProfileInfo();
  return (
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
            <S.InputImg type="file" accept=".jpg, .png, .jpeg" id="file_upload" onChange={modal.changeProfileImage} />
          </S.ProfileImgBunddle>
        </S.ProfileImgBox>
        <S.ChangeInput>
          <S.InputBox>
            <S.InputText>학교</S.InputText>
            <div>
              <span>{data?.data.schoolName}</span>
              <S.TextBox>
                <S.FixBtn onClick={modal.handleIsOpen}>수정하기</S.FixBtn>
              </S.TextBox>
            </div>
          </S.InputBox>
          <S.InputBox>
            <S.InputText>{data?.data.role === "PROFESSOR" ? "학과" : "관심 학과"}</S.InputText>
            <div>
              <span>{data?.data.mclass}</span>
              <S.TextBox>
                <S.FixBtn onClick={modal.handleMajorOpen}>수정하기</S.FixBtn>
              </S.TextBox>
            </div>
          </S.InputBox>
          <S.InputBox>
            <S.InputText>상태메시지</S.InputText>
            <div>
              <input
                value={data?.data.stsMessage !== null ? data?.data.stsMessage : modal.UserData.stsMessage}
                name="stsMessage"
                onChange={modal.handleProfileChange}
              />
              <S.TextBox>
                <S.FixBtn>{data?.data.stsMessage !== null ? "수정하기" : "등록하기"}</S.FixBtn>
              </S.TextBox>
            </div>
          </S.InputBox>
          <S.InputBox>
            <S.InputText>소개</S.InputText>
            <div>
              <input
                value={data?.data.introduce !== null ? data?.data.introduce : modal.UserData.introduce}
                name="stsMessage"
                onChange={modal.handleProfileChange}
              />
              <S.TextBox>
                <S.FixBtn>{data?.data.introduce !== null ? "수정하기" : "등록하기"}</S.FixBtn>
              </S.TextBox>
            </div>
          </S.InputBox>
          <S.InputBox style={{ background: "#E6E6E6" }}>
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
        </S.ChangeInput>
      </S.Boxlayout>
    </Modal>
  );
};

export default ProfileModal;
