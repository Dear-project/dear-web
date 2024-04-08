import React, { useState } from "react";

const useInfo = () => {
  const [name, setName] = useState<string>("");
  const [birthday, setBirthday] = useState<string>();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeBirthday = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(e.target.value);
  };

  return {
    name,
    birthday,
    handleChangeName,
    handleChangeBirthday,
  };
};

export default useInfo;
