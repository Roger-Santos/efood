import RestauranteLista from "../../components/RestauranteLista";
import Header from "../../components/Header";
import { useGetFeaturedRestaurantesQuery } from "../../services/api";

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
      id: number;
      nome: string;
      foto: string;
      descricao: string;
      preco: number;
      porcao: string;
    }
  ];
};

const Home = () => {
  const { data: restaurantes } = useGetFeaturedRestaurantesQuery();

  if(restaurantes){
    return (
      <>
        <Header />
        <RestauranteLista restaurantes={restaurantes} />
      </>
    );
  }
  return <h4>Carregando</h4>
};

export default Home;
