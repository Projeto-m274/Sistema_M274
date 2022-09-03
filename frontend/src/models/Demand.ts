export interface IDemand {
  id: string;
  responsavelId: string;
  responsavel: {
    userName: string;
    nome: string;
    email: string;
  };
  
}