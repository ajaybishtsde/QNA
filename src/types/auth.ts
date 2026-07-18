export interface RegisterRequest {
  userName: string;
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  userName: string;
  role: "USER" | "ADMIN";
}

export interface AuthResponse {
  status: boolean;
  user: User & {
    accessToken: string;
    refreshToken: string;
  };
}
