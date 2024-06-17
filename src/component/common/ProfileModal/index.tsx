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

interface ProfileModalProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  modalRef?: RefObject<HTMLDivElement>;
}

const processMarkdown = async (markdown: string) => {
  const processedHtml = await remark().use(html).process(markdown);
  return processedHtml.toString();
};

const maskPassword = (password: string) => {
  return "*".repeat(password.length);
};

const ProfileModal: React.FC<ProfileModalProps> = ({ setModal, modalRef }) => {
  const [isEditing, setIsEditing] = useState<
    "school-and-department" | "password" | "specialty" | null
  >(null);
  const [schoolAndDepartment, setSchoolAndDepartment] =
    useState("학교 및 학과");
  const [password, setPassword] = useState("비밀번호");
  const [specialty, setSpecialty] = useState("전문과목");

  const [schoolAndDepartmentHtml, setSchoolAndDepartmentHtml] = useState("");
  const [passwordHtml, setPasswordHtml] = useState("");
  const [specialtyHtml, setSpecialtyHtml] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);

  useEffect(() => {
    const updateMarkdown = async () => {
      const schoolHtml = await processMarkdown(schoolAndDepartment);
      setSchoolAndDepartmentHtml(schoolHtml);

      const pwdHtml = maskPassword(password); // 마스킹된 비밀번호 처리
      setPasswordHtml(pwdHtml);

      const specialtyHtml = await processMarkdown(specialty);
      setSpecialtyHtml(specialtyHtml);
    };

    updateMarkdown();
  }, [schoolAndDepartment, password, specialty]);

  const handleEditClick = (
    type: "school-and-department" | "password" | "specialty"
  ) => {
    setIsEditing(type);
  };

  const handleMarkdownSave = async () => {
    const schoolHtml = await processMarkdown(schoolAndDepartment);
    setSchoolAndDepartmentHtml(schoolHtml);

    const pwdHtml = maskPassword(password); // 마스킹된 비밀번호 처리
    setPasswordHtml(pwdHtml);

    const specialtyHtml = await processMarkdown(specialty);
    setSpecialtyHtml(specialtyHtml);

    setIsEditing(null);
  };

  const handleSaveChanges = async () => {
    await updateProfileData();
    setModal(false);
  };

  const handleProfileImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      setProfileImage(event.target.files[0]);
    }
  };

  const handleResetProfileImage = () => {
    setProfileImage(null);
  };

  const updateProfileData = async () => {
    const profileData = {
      schoolAndDepartment,
      password,
      specialty,
      profileImage, // 파일 업로드를 서버에서 처리한다고 가정합니다.
    };

    try {
      const formData = new FormData();
      formData.append("schoolAndDepartment", schoolAndDepartment);
      formData.append("password", password);
      formData.append("specialty", specialty);
      if (profileImage) {
        formData.append("file", profileImage);
      }

      const response = await fetch("", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();
      console.log("Profile updated successfully", data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <S.layout ref={modalRef}>
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
          <S.ProfileFix>프로필 수정</S.ProfileFix>
          <S.ProfileText>자신의 정보를 수정할 수 있습니다.</S.ProfileText>
        </S.ProfileTextBox>
        <S.ProfileImgBox>
          <S.ProfileImgText>프로필 사진</S.ProfileImgText>
          <S.ProfileImgBunddle>
            <div>
              <Image
                id="profile"
                src={profileImage ? URL.createObjectURL(profileImage) : Profile}
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
              onChange={handleProfileImageChange}
            />
          </S.ProfileImgBunddle>
          <S.ChangeDefultImg onClick={handleResetProfileImage}>
            기본 프로필로 변경
          </S.ChangeDefultImg>
        </S.ProfileImgBox>
        <S.ChangeInput>
          <S.InputBox>
            <S.InputText>학교 및 학과</S.InputText>
            <S.TextBox>
              {isEditing === "school-and-department" ? (
                <S.TextBox>
                  <textarea
                    value={schoolAndDepartment}
                    onChange={(e) => setSchoolAndDepartment(e.target.value)}
                    style={{ border: "none", width: "200px" }}
                  />
                  <S.FixBtn onClick={handleMarkdownSave}>수정완료</S.FixBtn>
                </S.TextBox>
              ) : (
                <S.TextBox>
                  <S.SpanChangeInput
                    dangerouslySetInnerHTML={{
                      __html: schoolAndDepartmentHtml,
                    }}
                  />
                  <S.FixBtn
                    onClick={() => handleEditClick("school-and-department")}
                  >
                    수정하기
                  </S.FixBtn>
                </S.TextBox>
              )}
            </S.TextBox>
          </S.InputBox>
          <S.InputBox>
            <S.InputText>비밀번호</S.InputText>
            <S.TextBox>
              {isEditing === "password" ? (
                <S.TextBox>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ border: "none", width: "200px" }}
                  />
                  <S.FixBtn onClick={handleMarkdownSave}>수정완료</S.FixBtn>
                </S.TextBox>
              ) : (
                <S.TextBox>
                  <S.SpanChangeInput
                    dangerouslySetInnerHTML={{
                      __html: passwordHtml,
                    }}
                  />
                  <S.FixBtn onClick={() => handleEditClick("password")}>
                    수정하기
                  </S.FixBtn>
                </S.TextBox>
              )}
            </S.TextBox>
          </S.InputBox>
          <S.InputBox>
            <S.InputText>전문과목</S.InputText>
            <S.TextBox>
              {isEditing === "specialty" ? (
                <S.TextBox>
                  <textarea
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    style={{ border: "none", width: "200px" }}
                  />
                  <S.FixBtn onClick={handleMarkdownSave}>수정완료</S.FixBtn>
                </S.TextBox>
              ) : (
                <S.TextBox>
                  <S.SpanChangeInput
                    dangerouslySetInnerHTML={{ __html: specialtyHtml }}
                  />
                  <S.FixBtn onClick={() => handleEditClick("specialty")}>
                    수정하기
                  </S.FixBtn>
                </S.TextBox>
              )}
            </S.TextBox>
          </S.InputBox>
        </S.ChangeInput>
        <div>
          <S.FixEnd onClick={handleSaveChanges}>수정완료</S.FixEnd>
        </div>
      </S.Boxlayout>
    </S.layout>
  );
};

export default ProfileModal;
