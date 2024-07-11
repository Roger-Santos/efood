import Loader from "../Loader";
import { Expertise, BannerImage, RestaurantName } from "./styles";

export type Props = {
  restaurant?: Comercio;
  isLoading: boolean;
};

const RestaurantProfileBanner = ({ restaurant, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />;
  }

  if (restaurant) {
    return (
      <BannerImage style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <div className="container">
          <Expertise>{restaurant.tipo}</Expertise>
          <RestaurantName>{restaurant.titulo}</RestaurantName>
        </div>
      </BannerImage>
    );
  } else {
    return (
      <>
        <h3>Erro ao carregar imagem</h3>
      </>
    );
  }
};

export default RestaurantProfileBanner;
