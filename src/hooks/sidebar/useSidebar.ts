import { useState, useEffect,useCallback } from "react";
import { usePathname } from "next/navigation";


const UseSidebar = () => {
  const pathname = usePathname();
  const [modalBtn, setModalBtn] = useState(false);
  const [isOpenProfile, setOpenProfile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  useEffect(() => {
    if (pathname == "/chat") {
      setIsSidebarOpen(false); 
    } else {
      setIsSidebarOpen(true);  
    }
  }, [pathname]);
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
  pathname,
  closeModal,
  isOpenProfile,
  isSidebarOpen,
  modalBtn,
  handleProfileClick,
  PrfoileClose,
  setModalBtn
}
};

export default UseSidebar;
