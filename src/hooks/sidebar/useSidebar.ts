import { useState, useEffect,useCallback } from "react";


const UseSidebar = () => {
  const [modalBtn, setModalBtn] = useState(false);
  const [isOpenProfile, setOpenProfile] = useState(false);
  const closeModal = useCallback(() => {
    setModalBtn(false);
  }, []);
  const PrfoileClose = useCallback(()=>{
    setOpenProfile(false)
  }, [])
  const handleProfileClick = ()=>{
    setOpenProfile((prev)=>!prev)
    closeModal();
}
return{
  closeModal,
  isOpenProfile,
  modalBtn,
  handleProfileClick,
  PrfoileClose,
  setModalBtn
}
};

export default UseSidebar;
