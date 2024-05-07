import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

const useSidebar = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleItemClick = (item) => {
    setSelectedItem(item);
    router.push(`/path/${item}`); // 선택한 아이템에 따라 경로 이동
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/api/user-profile"); // URL 수정 필요
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return {
    selectedItem,
    handleItemClick,
    userProfile,
    pathname, // 현재 경로 정보 반환
    router, // 라우팅 기능 제공
  };
};

export default useSidebar;
