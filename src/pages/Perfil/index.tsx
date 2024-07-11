import { useParams } from "react-router-dom";
import RestaurantProfileBanner from "../../components/RestaurantProfileBanner";
import RestaurantProfileHeader from "../../components/RestaurantProfileHeader";
import RestaurantProfileList from "../../components/RestaurantProfileList";
import { useGetRestauranteQuery } from "../../services/api";

const Perfil = () => {
  const { id } = useParams();
  const { data: restaurant, isLoading: isLoadingRestaurant } =
    useGetRestauranteQuery(id!);

  return (
    <>
      <RestaurantProfileHeader />
      <RestaurantProfileBanner
        restaurant={restaurant}
        isLoading={isLoadingRestaurant}
      />
      <RestaurantProfileList
        restaurant={restaurant}
        isLoading={isLoadingRestaurant}
      />
    </>
  );
};

export default Perfil;
