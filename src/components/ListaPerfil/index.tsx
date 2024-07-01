import Mprato from "../../models/Mprato";
import { Comercio } from "../../pages/Home";
import PratoPerfil from "../PratoPerfil";
import { Container, List } from "./styles";

export type Props = {
  restaurante: Comercio;
};

const ListaPerfil = ({ restaurante }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurante.cardapio.map((_prato) => (
          <PratoPerfil
            key={_prato.nome}
            prato={new Mprato(_prato.id, _prato.nome, _prato.foto, _prato.descricao, _prato.porcao, _prato.preco)}
          />
        ))}
      </List>
    </div>
  </Container>
);

export default ListaPerfil;
