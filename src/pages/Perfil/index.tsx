import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BannerPerfil from "../../components/BannerPerfil";
import HeaderPerfil from "../../components/HeaderPerfil";
import ListaPerfil from "../../components/ListaPerfil";
import { Comercio } from "../Home";

const Perfil = () => {
  const { id } = useParams();
  const [restaurante, setRestaurante] = useState<Comercio>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res));
  }, [id]);

  if (!restaurante) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <HeaderPerfil />
      <BannerPerfil restaurante={restaurante}/>
      <ListaPerfil restaurante={restaurante} />
    </>
  );
};

export default Perfil;
