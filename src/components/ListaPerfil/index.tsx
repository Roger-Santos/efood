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
        {restaurante.cardapio.map((prato) => (
          <PratoPerfil
            key={prato.nome}
            nome={prato.nome}
            foto={prato.foto}
            preco={prato.preco}
            descricao={prato.descricao}
            porcao={prato.porcao}
          />
        ))}
      </List>
    </div>
  </Container>
);

export default ListaPerfil;
