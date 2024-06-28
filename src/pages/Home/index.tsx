import RestauranteLista from "../../components/RestauranteLista";
import Header from "../../components/Header";
import { useEffect, useState } from "react";

export type Comercio = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: [
    {
      nome: string;
      foto: string;
      descricao: string;
      preco: number;
      porcao: string;
    }
  ];
};

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Comercio[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurantes(res));
  }, []);

  return (
    <>
      <Header />
      <RestauranteLista restaurantes={restaurantes} />
    </>
  );
};

export default Home;
