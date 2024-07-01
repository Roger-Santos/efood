import { useParams } from "react-router-dom";
import BannerPerfil from "../../components/BannerPerfil";
import HeaderPerfil from "../../components/HeaderPerfil";
import ListaPerfil from "../../components/ListaPerfil";
import { useGetRestauranteQuery } from "../../services/api";

const Perfil = () => {
  const { id } = useParams();
  const { data: restaurante } = useGetRestauranteQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <HeaderPerfil />
      <BannerPerfil restaurante={restaurante} />
      <ListaPerfil restaurante={restaurante} />
    </>
  );
};

export default Perfil;
