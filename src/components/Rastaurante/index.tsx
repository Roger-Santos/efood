import { Link } from "react-router-dom";
import { Tag } from "../Tag";
import {
  Card,
  Imagem,
  Tipo,
  Fundo,
  AreaTituloRating,
  Titulo,
  AreaRating,
  Nota,
  Descricao,
} from "./styles";

type Props = {
  titulo: string;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  id: number;
};

const Restaurante = ({
  titulo,
  tipo,
  avaliacao,
  descricao,
  capa,
  id,
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + "...";
    }
    return descricao;
  };

  return (
  <Card>
    <Imagem src={capa} alt={titulo} />
    <Tipo>
      <Tag key={titulo}>{tipo}</Tag>
    </Tipo>
    <Fundo>
      <AreaTituloRating>
        <Titulo>{titulo}</Titulo>
        <AreaRating>
          <Nota>{avaliacao}</Nota>
          <img
            src={require("../../assets/images/estrela.png")}
            alt="simbolo rating"
          />
        </AreaRating>
      </AreaTituloRating>
      <Descricao>{getDescricao(descricao)}</Descricao>
      <Link to={`/Perfil/${id}`}>
        <Tag>Saiba mais</Tag>
      </Link>
    </Fundo>
  </Card>)
};

export default Restaurante;
