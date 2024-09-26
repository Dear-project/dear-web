import Token from "../../libs/token/tokens";

const useLogout = () => {

  const logOut = () => {
    window.location.href = "/login"
    Token.clearToken();
    
  };

  return { logOut };
};

export default useLogout;