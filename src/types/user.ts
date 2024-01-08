interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
}

export interface LoginUserResponse {
  jwt: string;
  user: User;
}
