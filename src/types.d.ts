declare type Comercio = {
  id: number;
  titulo: string;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: [
    {
      id: number;
      nome: string;
      foto: string;
      descricao: string;
      preco: number;
      porcao: string;
    }
  ];
};
