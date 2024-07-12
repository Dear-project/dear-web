import AuthRepositoryImpl from "../../repositories/auth/authRepositoryImpl";
import { useMutation } from "react-query";

export const usePostLoginMutation = () => {
  const mutation = useMutation({
    mutationFn: AuthRepositoryImpl.login,
  });
  return mutation;
};
