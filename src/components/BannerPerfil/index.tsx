import { Especialidade, Imagem, NomeRestaurante } from "./styles";
import bannerImg from "../../assets/images/bannerPerfil.png";

const BannerPerfil = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Especialidade>Italiana</Especialidade>
      <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
    </div>
  </Imagem>
);

export default BannerPerfil;
