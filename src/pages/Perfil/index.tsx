import BannerPerfil from "../../components/BannerPerfil";
import HeaderPerfil from "../../components/HeaderPerfil";
import ListaPerfil from "../../components/ListaPerfil";
import Mprato from "../../models/Mprato";
import pizzaImg from "../../assets/images/pizza_marguerita.png";

const pratos: Mprato[] = [
  {
    id: 1,
    title: "Pizza Marguerita",
    image: pizzaImg,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 2,
    title: "Pizza Marguerita",
    image: pizzaImg,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 3,
    title: "Pizza Marguerita",
    image: pizzaImg,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 4,
    title: "Pizza Marguerita",
    image: pizzaImg,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 5,
    title: "Pizza Marguerita",
    image: pizzaImg,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 6,
    title: "Pizza Marguerita",
    image: pizzaImg,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
];

const Perfil = () => (
  <>
    <HeaderPerfil />
    <BannerPerfil />
    <ListaPerfil prato={pratos} />
  </>
);

export default Perfil;
