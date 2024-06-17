import React from "react";
import * as S from "../style";
import Image from "next/image";

interface PreviewImageProps {
  previewImage: string[];
  onclick: () => void;
}

const PreviewImage: React.FC<PreviewImageProps> = ({ previewImage, onclick }) => {
  return (
    <>
      {previewImage.map((image, idx) => (
        <div key={idx} style={{ display: "flex" }}>
          <Image src={image} alt="미리보기 이미지" width={100} height={100} onClick={onclick} />
        </div>
      ))}
    </>
  );
};

export default PreviewImage;
