import { Especialidade, Imagem, NomeRestaurante } from "./styles";
import bannerImg from "../../assets/images/bannerPerfil.png";
import { Comercio } from "../../pages/Home";

export type Props = {
  restaurante: Comercio;
};

const BannerPerfil = ({ restaurante }: Props) => (
  <Imagem style={{ backgroundImage: `url(${restaurante.capa})` }}>
    <div className="container">
      <Especialidade>{restaurante.tipo}</Especialidade>
      <NomeRestaurante>{restaurante.titulo}</NomeRestaurante>
    </div>
  </Imagem>
);

export default BannerPerfil;
