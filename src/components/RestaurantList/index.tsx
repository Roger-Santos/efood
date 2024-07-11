import Loader from "../Loader";
import Restaurant from "../Restaurant";
import { Container, List } from "./styles";

export type Props = {
  restaurants?: Comercio[];
  isLoading: boolean;
};

const RestaurantList = ({ restaurants, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="container">
        <List>
          {restaurants &&
            restaurants.map((_restaurants) => (
              <li key={_restaurants.id}>
                <Restaurant
                  title={_restaurants.titulo}
                  type={_restaurants.tipo}
                  rate={_restaurants.avaliacao}
                  description={_restaurants.descricao}
                  cover={_restaurants.capa}
                  id={_restaurants.id}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  );
};

export default RestaurantList;
