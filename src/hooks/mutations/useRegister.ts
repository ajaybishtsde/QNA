import { useMutation } from "@tanstack/react-query";
import { register } from "@/src/services/auth.service";

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  });
};
