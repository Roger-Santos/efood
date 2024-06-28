import Mprato from "../../models/Mprato";
import PratoPerfil from "../PratoPerfil";
import { Container, List } from "./styles";

export type Props = {
  prato: Mprato[];
};

const ListaPerfil = ({ prato }: Props) => (
  <Container>
    <div className="container">
      <List>
        {prato.map((prato) => (
          <PratoPerfil
            key={prato.id}
            title={prato.title}
            image={prato.image}
            description={prato.description}
          />
        ))}
      </List>
    </div>
  </Container>
);

export default ListaPerfil;
