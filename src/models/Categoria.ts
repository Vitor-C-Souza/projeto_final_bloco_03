export default interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  produtos?: { id: number; nome: string }[];
}
