"use client";

import React from "react";
import * as S from "./style";
import Image from "next/image";
import useWrite from "@/hooks/community/write/useWrite";
import Sidebar from "@/components/Sidebar/index";
import Dropdown from "src/asset/DropdownButton.svg";
import CloseButton from "src/asset/DropdownCloseButton.svg";
import ImageUpload from "src/asset/ImageUpload.svg";
import FileUpload from "src/asset/FileUpload.svg";
import ConfirmButton from "src/asset/ConfirmButton.svg";
import PreviewImage from "./previewImage/index";

const Write = () => {
  const { ...write } = useWrite();

  return (
    <S.Write>
      <Sidebar />
      <S.Main>
        <S.TitleIinput
          placeholder="제목"
          name="title"
          type="text"
          onChange={write.handleWriteData}
          value={write.writeData.title}
        />
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <PreviewImage previewImage={write.image ? write.image : []} onclick={() => write.setImage([])} />
        </div>
        <S.ContentInput
          placeholder="내용"
          name="content"
          onChange={write.handleWriteData}
          value={write.writeData.content}
        />
      </S.Main>
      <S.ButtonWrap>
        {write.isClicked === true && (
          <div>
            <Image src={ConfirmButton} alt="완료 버튼" onClick={write.onWrite} />
            <Image src={ImageUpload} alt="이미지 업로드 버튼" onClick={write.handleImageClick} />
            <input
              ref={write.ImageRef}
              type="file"
              multiple
              style={{ display: "none" }}
              accept=".jpg, .jpeg, .png"
              onChange={write.handleImageChange}
            />
            <Image src={FileUpload} alt="파일 업로드 버튼" onClick={write.handleFileClick} />
            <input
              ref={write.FileRef}
              type="file"
              multiple
              style={{ display: "none" }}
              accept=".hwp, hwpx, .doc, .docx, .zip, .dmg, .pdf"
              onChange={write.handleFileChange}
            />
          </div>
        )}
        <Image className="button" src={write.isClicked ? CloseButton : Dropdown} alt="" onClick={write.onClick} />
      </S.ButtonWrap>
    </S.Write>
  );
};

export default Write;
