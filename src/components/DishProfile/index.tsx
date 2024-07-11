import { useState } from "react";
import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart";
import closeImage from "../../assets/images/close.png";
import * as S from "./styles";
import DishModel from "../../models/DishModel";

type Props = {
  dish: DishModel;
};

const DishProfile = ({ dish }: Props) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(dish));
    dispatch(open());
  };

  const getDescricao = (text: string) => {
    if (text.length > 125) {
      return text.slice(0, 122) + "...";
    }
    return text;
  };

  const [modal, setModal] = useState({
    isVisible: false,
  });

  const closeModal = () => {
    setModal({
      isVisible: false,
    });
  };

  const parsePrice = (price = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <>
      <S.Card>
        <S.CardImage src={dish.image} alt={dish.title} />
        <S.Title>{dish.title}</S.Title>
        <S.Description>{getDescricao(dish.description)}</S.Description>
        <S.StandardButton title="Clique aqui para adicionar ao carrinho"
          onClick={() => {
            setModal({
              isVisible: true,
            });
          }}
        >
          Adicionar ao carrinho
        </S.StandardButton>
      </S.Card>
      <S.Modal className={modal.isVisible ? "visivel" : ""}>
        <S.ModalContent className="container">
          <img
            className="close"
            src={closeImage}
            alt="Ícone de fechar"
            onClick={() => {
              closeModal();
            }}
          />

          <div className="dados">
            <div className="areaImg">
              <img className="capa" src={dish.image} alt={dish.title} />
            </div>
            <div className="descricao">
              <h2>{dish.title}</h2>
              <p>
                {dish.description}
                <br />
                <br />
                Serve de {dish.portion}
              </p>
              <span title="Clique aqui para adicionar ao carrinho" className="botao" onClick={addToCart}>
                Adicionar ao carrinho - {parsePrice(dish.price)}
              </span>
            </div>
          </div>
        </S.ModalContent>
        <div
          onClick={() => {
            closeModal();
          }}
          className="overlay"
        ></div>
      </S.Modal>
    </>
  );
};

export default DishProfile;
