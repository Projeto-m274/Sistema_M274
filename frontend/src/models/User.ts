export interface IUser {
  name: string;
  username: string;
  email: string;
  password?: string;
  profileId: number;
}

export interface IUserResponse {
  token: string;
  usuario: {
    email: string;
    nome: string;
    userName: string;
  };
}