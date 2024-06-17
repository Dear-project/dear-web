import { useState, useEffect, SetStateAction } from "react";
import { usePathname, useRouter } from "next/navigation";
import { UserProfile } from "../../types/profile/profile.type";
import {useGetProfileInfo} from "../../queries/profile/query"
import config from "src/config/config.json"
const useSidebar = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoclick = () => {
    router.push("/main");
    setSelectedItem(""); // 로고 클릭 시 선택된 버튼 초기화
    sessionStorage.removeItem("selectedItem"); // 세션 스토리지에서 선택된 버튼 정보 제거
  };

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    sessionStorage.setItem("selectedItem", item); // 선택된 버튼 정보를 세션 스토리지에 저장
    if (item === "profile") {
      router.push("/profile"); // 프로필 페이지로 이동
    } else {
      router.push(`/path/${item}`);
    }
  };
  const handleProfileClick = () => {
    handleItemClick("profile");
  };

  const {data} = useGetProfileInfo();

  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     try {
  //       const response = await axios.get(`${config.serverUrl}/profile`);
  //       setUserProfile(response.data);
  //     } catch (error) {
  //       console.error("Error fetching user profile:", error);
  //     }
  //   };

    // fetchUserProfile();

    // 페이지 로드 시 세션 스토리지에서 선택된 버튼 정보를 읽어와 selectedItem 상태 업데이트
    const storedItem = sessionStorage.getItem("selectedItem");
    if (storedItem) {
      setSelectedItem(storedItem);
    }
  

  return {
    selectedItem,
    handleLogoclick,
    handleItemClick,
    handleProfileClick,
    userProfile,
    pathname,
    router,
    data
  };
};

export default useSidebar;
