import React,{useCallback,useEffect,ReactNode} from "react";
import * as S from "./style";
import Modal from "../modal/index";
import { SELECT_SECTION_NAME } from "@/constants/selectModal/selectModal.constants";
import SelectMajorModal from "../selectMajorModal";
import SelectSchoolModal from "../selectSchoolModal";
import useSelectModal from "@/hooks/firstLogin/selectModal";


interface SelectModalProps {
  isOpen: boolean;
  sectionLocation:string;
}


const SelectModal = ({isOpen,sectionLocation}:SelectModalProps)=>{   
  const {section, ...select}= useSelectModal();
  useEffect(() => {
    if (sectionLocation === "second") {
      select.setSection("second");
    }
  }, [sectionLocation, select.setSection]);
  
    const selectComponents: ReactNode[] = [
        <SelectSchoolModal {...select}  />,
        <SelectMajorModal {...select} />,
      ];
      
    return(
        <>
        <Modal isOpen={isOpen} close={select.closeModal}>
          <S.SelectMajorModalWrap>
            <S.Main>
            {selectComponents.map((component, idx) => {
          return section === SELECT_SECTION_NAME[idx].title && component;
        })}
            </S.Main>
          </S.SelectMajorModalWrap>
        </Modal>
      </>
    )
}
export default SelectModal;