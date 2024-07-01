import { Comercio } from "../../pages/Home";
import Restaurante from "../Rastaurante";
import { Container, List } from "./styles";

export type Props = {
  restaurantes: Comercio[];
};

const RestauranteLista = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurantes) => (
          <li key={restaurantes.id}>
            <Restaurante
              titulo={restaurantes.titulo}
              tipo={restaurantes.tipo}
              avaliacao={restaurantes.avaliacao}
              descricao={restaurantes.descricao}
              capa={restaurantes.capa}
              id={restaurantes.id}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
);

export default RestauranteLista;
