import DishModel from "../../models/DishModel";
import Loader from "../Loader";
import DishProfile from "../DishProfile";
import { Container, List } from "./styles";

export type Props = {
  restaurant?: Comercio;
  isLoading: boolean;
};

const RestaurantProfileList = ({ restaurant, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="container">
        <List>
          {restaurant &&
            restaurant.cardapio.map((_dish) => (
              <DishProfile
                key={_dish.nome}
                dish={
                  new DishModel(
                    _dish.id,
                    _dish.nome,
                    _dish.foto,
                    _dish.descricao,
                    _dish.porcao,
                    _dish.preco
                  )
                }
              />
            ))}
        </List>
      </div>
    </Container>
  );
};

export default RestaurantProfileList;
