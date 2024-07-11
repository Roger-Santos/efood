import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootReducer } from "../../store";
import { open } from "../../store/reducers/cart";
import * as S from "./styles";
import headerImg from "../../assets/images/fundo.png";

const RestaurantProfileHeader = () => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const openCart = () => {
    dispatch(open());
  };

  return (
    <>
      <S.HeaderBar style={{ backgroundImage: `url(${headerImg})` }}>
        <div className="container">
          <S.HeaderElements>
            <S.HeaderTexts>Restaurantes</S.HeaderTexts>
            <Link to="/">
              <S.Logo
                src={require("../../assets/images/logo.png")}
                alt="Logo do eFood"
              />
            </Link>
            <S.HeaderTexts title="Clique aqui para visualizar o carrinho" onClick={openCart}>
              {items.length} produto(s) no carrinho
            </S.HeaderTexts>
          </S.HeaderElements>
        </div>
      </S.HeaderBar>
    </>
  );
};

export default RestaurantProfileHeader;
