import React, { useState } from "react";
import * as S from "./style";
import Image from "next/image";
import CheckIcon from "@/asset/img/radio/checkRadio.svg"; 
import RadioUncheckIcon from "@/asset/img/radio/raidoBox.svg"; 
import { ELEM_TYPE } from "@/constants/elemType/elemType.constants";

interface CustomRadioProps {
  value: ELEM_TYPE;
  selected: boolean;
  onChange: (value: ELEM_TYPE) => void;
}

const CustomRadio = ({ value, selected, onChange }: CustomRadioProps) => {
  const handleClick = () => {
    onChange(value);
  };

  return (
    <S.RadioWrapper onClick={handleClick} style={{ cursor: "pointer" }}>
      <S.IconWrapper >
        {selected ? (
          <Image src={CheckIcon} alt="체크된 아이콘" width={20} height={20} />
        ) : (
          <Image src={RadioUncheckIcon} alt="체크되지 않은 아이콘" width={20} height={20} />
        )}
      </S.IconWrapper>
      <S.LabelText>{value==="ELEM_LIST" ? "초등학교" : value==="MIDD_LIST" ? "중학교": value==="HIGH_LIST" ? "고등학교":"대학교"}</S.LabelText> 
    </S.RadioWrapper>
  );
};

export default CustomRadio;
