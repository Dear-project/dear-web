import { useState, useEffect, SetStateAction } from "react";
import { usePathname, useRouter } from "next/navigation";
import { UserProfile } from "src/types/profile/profile";
import axios from "axios";
import img from "public/svgs/툰게더 이미지 1.svg";

const DEFAULT_USER_PROFILE: UserProfile = {
  name: "Guest",
  email: "guest@example.com",
  id: 0,
  type: "STUDENT",
  schoolName: "대구소프트웨어고등학교",
  introduce: "",
  img: img,
  stsMessage: "",
  lclass: "",
  mclass: "",
};

const useSidebar = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [userProfile, setUserProfile] =
    useState<UserProfile>(DEFAULT_USER_PROFILE);
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
    if (item === item) {
      router.push(`/path/${item}`);
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("");
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setUserProfile(DEFAULT_USER_PROFILE); // 에러 발생 시 기본 프로필 정보 사용
      }
    };

    fetchUserProfile();

    // 페이지 로드 시 세션 스토리지에서 선택된 버튼 정보를 읽어와 selectedItem 상태 업데이트
    const storedItem = sessionStorage.getItem("selectedItem");
    if (storedItem) {
      setSelectedItem(storedItem);
    }
  }, []);

  return {
    selectedItem,
    handleLogoclick,
    handleItemClick,
    userProfile,
    pathname,
    router,
  };
};

export default useSidebar;
