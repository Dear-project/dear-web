import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { UserProfile } from "../../types/profile/profile.type";
import config from "src/config/config.json";
import { useSidebarStore } from "src/store/common/sidebar/sidebar.store";
import axios from "axios";

const useSidebar = () => {
  // const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  // const selectedItem = useSidebarStore((state) => state.selectedItem);
  // const setSelectedItem = useSidebarStore((state) => state.setSelectedItem);
  // const pathname = usePathname();
  // const router = useRouter();



  // const fetchUserProfile = async () => {
  //   try {
  //     const response = await axios.get(`${config.serverUrl}/profile`);
  //     console.log("User profile fetched successfully:", response.data); // 응답 데이터 로그
  //     setUserProfile(response.data);
  //   } catch (error) {
  //     console.error("Error fetching user profile:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUserProfile();
  // }, []);

  // // 페이지 로드 시 세션 스토리지에서 선택된 버튼 정보를 읽어와 selectedItem 상태 업데이트
  // useEffect(() => {
  //   const storedItem = sessionStorage.getItem("selectedItem");
  //   if (storedItem) {
  //     setSelectedItem(storedItem);
  //   }
  // }, [setSelectedItem]);

  // useEffect(() => {
  //   console.log("User profile state updated:", userProfile); // userProfile 상태 변경 로그
  // }, [userProfile]);

  return {
    // fetchUserProfile,
    // selectedItem,
    // userProfile,
    // pathname,
    // router,
  };
};

export default useSidebar;
