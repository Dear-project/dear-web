import { useState } from "react";

const useMain = () => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsClick((prev) => !prev);
  };

  return {
    isClick,
    handleModalOpen,
  };
};

export default useMain;
