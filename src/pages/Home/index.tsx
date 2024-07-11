import RestaurantList from "../../components/RestaurantList";
import Header from "../../components/Header";
import { useGetFeaturedRestaurantesQuery } from "../../services/api";

const Home = () => {
  const { data: restaurants, isLoading: isLoadingRestaurants } =
    useGetFeaturedRestaurantesQuery();

  return (
    <>
      <Header />
      <RestaurantList
        restaurants={restaurants}
        isLoading={isLoadingRestaurants}
      />
    </>
  );
};

export default Home;
