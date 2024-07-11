import { Link } from "react-router-dom";
import { Tag } from "../Tag";
import * as S from "./styles";

type Props = {
  title: string;
  type: string;
  rate: number;
  description: string;
  cover: string;
  id: number;
};

const Restaurant = ({ title, type, rate, description, cover, id }: Props) => {
  const getDescricao = (text: string) => {
    if (text.length > 250) {
      return text.slice(0, 247) + "...";
    }
    return text;
  };

  return (
    <S.Card>
      <S.RestaurantImage src={cover} alt={title} />
      <S.RestaurantType>
        <Tag key={title}>{type}</Tag>
      </S.RestaurantType>
      <S.CardBackground>
        <S.TitleRateArea>
          <S.Title>{title}</S.Title>
          <S.RateArea>
            <S.Rate>{rate}</S.Rate>
            <img
              src={require("../../assets/images/estrela.png")}
              alt="simbolo rating"
            />
          </S.RateArea>
        </S.TitleRateArea>
        <S.Description>{getDescricao(description)}</S.Description>
        <Link to={`/Perfil/${id}`}>
          <Tag>Saiba mais</Tag>
        </Link>
      </S.CardBackground>
    </S.Card>
  );
};

export default Restaurant;
