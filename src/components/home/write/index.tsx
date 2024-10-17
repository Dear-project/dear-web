"use client";

import React from "react";
import * as S from "./style";
import Image from "next/image";
import useWrite from "@/hooks/community/write/useWrite";
import ImageUpload from "src/asset/img/ImageUpload.svg";
import WriteGroomy from "@/asset/img/WriteGroomy.svg";

const Write = () => {
  const { ...write } = useWrite();

  return (
    // <S.Write>
    //   <S.Main>
    //     <S.TitleIinput
    //       placeholder="제목"
    //       name="title"
    //       type="text"
    //       onChange={write.handleWriteData}
    //       value={write.writeData.title}
    //     />
    //     <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
    //       <PreviewImage previewImage={write.image ? write.image : []} onclick={() => write.setImage([])} />
    //     </div>
    //     <S.ContentInput
    //       placeholder="내용"
    //       name="content"
    //       onChange={write.handleWriteData}
    //       value={write.writeData.content}
    //     />
    //   </S.Main>
    //   <S.ButtonWrap>
    //     {write.isClicked === true && (
    //       <div>
    //         <Image src={ConfirmButton} alt="완료 버튼" onClick={write.onWrite} />
    //         <Image src={ImageUpload} alt="이미지 업로드 버튼" onClick={write.handleImageClick} />
    //         <input
    //           ref={write.ImageRef}
    //           type="file"
    //           multiple
    //           style={{ display: "none" }}
    //           accept=".jpg, .jpeg, .png"
    //           onChange={write.handleImageChange}
    //         />
    //       </div>
    //     )}
    //     <Image className="button" src={write.isClicked ? CloseButton : Dropdown} alt="" onClick={write.onClick} />
    //   </S.ButtonWrap>
    // </S.Write>
    <S.Write>
      <S.WriteWrap>
        <S.TitleWrap>
          <input
            name="title"
            placeholder="제목을 입력해주세요"
            value={write.writeData.title}
            onChange={write.handleWriteData}
          />
        </S.TitleWrap>
        <S.ContentWrap>
          <textarea
            name="content"
            placeholder="내용을 입력해주세요"
            value={write.writeData.content}
            onChange={write.handleWriteData}
          />
        </S.ContentWrap>
      </S.WriteWrap>
      <S.ToolsWrap>
        <S.ToolsTitle>글쓰기 도구</S.ToolsTitle>
        <S.ImageWrap>
          <div>
            <Image src={ImageUpload} alt="이미지업로드" onClick={write.handleImageClick} />
            <input
              style={{ display: "none" }}
              ref={write.ImageRef}
              type="file"
              multiple
              accept=".jpg, .jpeg, .png, .webp, .svg"
              onChange={write.handleImageChange}
            />
            <h1>이미지 게시</h1>
          </div>
        </S.ImageWrap>
        <S.Button>게시하기</S.Button>
      </S.ToolsWrap>
      <Image src={WriteGroomy} alt="귀여운놈" className="cute" />
    </S.Write>
  );
};

export default Write;
