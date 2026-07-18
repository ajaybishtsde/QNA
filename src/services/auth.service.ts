import { api } from "@/src/lib/axios";
import { AuthResponse, RegisterRequest } from "@/src/types/auth";

export const register = async (data: RegisterRequest) => {
  const response = await api.post<AuthResponse>("/auth/register", data);

  return response.data;
};
