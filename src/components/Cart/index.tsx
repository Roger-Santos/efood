import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RootReducer } from "../../store";
import InputMask from "react-input-mask";
import { close, remove } from "../../store/reducers/cart";
import * as S from "./styles";
import { usePurchaseMutation } from "../../services/api";
import { StandardButton } from "../DishProfile/styles";
import { clear } from "../../store/reducers/cart";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.price!);
    }, 0);
  }; 

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  function verifyForm() {
    if (form.errors.fullName || form.errors.address || form.errors.city || form.errors.numberHouse || form.errors.cep) {
      return false;
    } else {
      return true;
    }
  }

  function formIsValid() {
    if (form.dirty) {
      if (verifyForm()) {
        manageCartContent(2);
      } else {
        alert("Por favor preencha todos os campos obrigatórios");
      }
    } else {
      alert(
        "Por favor preencha os campos para passar para a etapa de pagamento"
      );
    }
  }  

  function finalValidation() {
    if (form.isValid) {
      form.handleSubmit();
    } else {
      alert("Por favor preencha todos os campos obrigatórios");
    }
  }

  const finalizePurchase = () => {
    closeCart();
    window.location.reload();
  };

  const parsePrice = (price = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const setVisibilityDiv = (div: HTMLElement, value: string) => {
    if (div) {
      div.style.display = value;
    }
  };

  const changeFormElements = (states: string[]) => {
    setVisibilityDiv(document.getElementById("productsCart")!, states[0]);
    setVisibilityDiv(document.getElementById("deliveryCart")!, states[1]);    
    setVisibilityDiv(document.getElementById("paymentCart")!, states[2]);
  };

  const manageCartContent= (step: number) => {
    switch(step) {
      case 1:
        //Exibe o card delivery
        changeFormElements(["none", "block", "none"]);
        break;
      case 2:
        //Exibe o card pagamento
        changeFormElements(["none", "none", "block"]);
        break;
      case 3:
          //Exibe o card products
          changeFormElements(["block", "none", "none"]);
          break;
      default:
    }
  }

  const closeCart = () => {
    manageCartContent(3);
    dispatch(close());
  };

  const form = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      cep: "",
      numberHouse: "",
      complement: "",
      cardName: "",
      cardNumber: "",
      cvvNumber: "",
      cardMonth: "",
      cardYear: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "O nome precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      address: Yup.string()
        .min(8, "O endereço precisa ter pelo menos 8 caracteres")
        .required("O campo é obrigatório"),
      city: Yup.string()
        .min(5, "A cidade precisa ter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      cep: Yup.string().required("O campo é obrigatório"),
      numberHouse: Yup.string()
        .min(1, "O número da residencia precisa ter pelo menos 1 digito")
        .required("O campo é obrigatório"),
      cardName: Yup.string().required("O campo é obrigatório"),
      cardNumber: Yup.string().required("O campo é obrigatório"),
      cvvNumber: Yup.string().required("O campo é obrigatório"),
      cardMonth: Yup.string()
        .min(2, "Este campo precisa ter pelo menos 2 digitos")
        .required("O campo é obrigatório"),
      cardYear: Yup.string().required("O campo é obrigatório"),
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.price as number,
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.numberHouse),
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvvNumber),
            expires: {
              month: Number(values.cardMonth),
              year: Number(values.cardYear),
            },
          },
        },
      });
    },
  });

  return (
    <S.CartContainer className={isOpen ? "is-open" : ""}>
      <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          {(items.length > 0 ) ? (
            <>
            <S.ProductsCart id="productsCart" title="Itens no carrinho">
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h3>{item.title}</h3>
                      <span>{parsePrice(item.price)}</span>
                    </div>
                    <button onClick={() => removeItem(item.id)} type="button" title="Clique aqui para remover o item" />
                  </S.CartItem>
                ))}
              </ul>
              <S.ValueText>
                <p>Valor total</p>
                <p>{parsePrice(getTotalPrice())}</p>
              </S.ValueText>
              <StandardButton title="Clique aqui para inserir dados da entrega" onClick={() => manageCartContent(1)}>Continuar com a entrega</StandardButton>
            </S.ProductsCart>
            <form onSubmit={form.handleSubmit}>
              <S.DeliveryCart id="deliveryCart" title="Dados da entrega">
                <S.Title>Entrega</S.Title>
                <S.InputGroup>
                  <label htmlFor="fullName">Quem irá receber</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("fullName") ? "error" : ""}
                  />
                </S.InputGroup>
                <S.ErrorMessage>{form.errors.fullName}</S.ErrorMessage>
                <S.InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("address") ? "error" : ""}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("city") ? "error" : ""}
                  />
                </S.InputGroup>
                <S.DivFlex>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="cep">CEP</label>
                    <InputMask
                      id="cep"
                      type="text"
                      name="cep"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError("cep") ? "error" : ""}
                      mask="99999-999"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="numberHouse">Número</label>
                    <input
                      id="numberHouse"
                      type="text"
                      name="numberHouse"
                      value={form.values.numberHouse}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError("numberHouse") ? "error" : ""
                      }
                    />
                  </S.InputGroup>
                </S.DivFlex>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    id="complement"
                    type="text"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("complement") ? "error" : ""}
                  />
                </S.InputGroup>
                <StandardButton
                  title="Clique aqui para inserir dados de pagamento"
                  id="paymentButton"
                  onClick={() => formIsValid()}
                >
                  Continuar com o pagamento
                </StandardButton>
                <StandardButton title="Clique aqui para voltar ao carrinho"
                  onClick={() =>
                    manageCartContent(3)
                  }
                >
                  Voltar para o carrinho
                </StandardButton>
              </S.DeliveryCart>
              <S.PaymentCart id="paymentCart" title="Dados de pagamento">
                <S.Title>
                  Pagamento - Valor a pagar {parsePrice(getTotalPrice())}
                </S.Title>
                <S.InputGroup>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={form.values.cardName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("cardName") ? "error" : ""}
                  />
                </S.InputGroup>
                <S.DivFlex>
                  <S.InputGroup maxWidth="228px">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError("cardNumber") ? "error" : ""
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="87px">
                    <label htmlFor="cvvNumber">CVV</label>
                    <InputMask
                      type="text"
                      id="cvvNumber"
                      name="cvvNumber"
                      value={form.values.cvvNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError("cvvNumber") ? "error" : ""}
                      mask="999"
                    />
                  </S.InputGroup>
                </S.DivFlex>
                <S.DivFlex>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="cardMonth">Mês de vencimento</label>
                    <InputMask
                      type="text"
                      id="cardMonth"
                      name="cardMonth"
                      value={form.values.cardMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError("cardMonth") ? "error" : ""}
                      mask="99"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="cardYear">Ano de vencimento</label>
                    <InputMask
                      type="text"
                      id="cardYear"
                      name="cardYear"
                      value={form.values.cardYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError("cardYear") ? "error" : ""}
                      mask="99"
                    />
                  </S.InputGroup>
                </S.DivFlex>

                <StandardButton
                  id="finishButton"
                  onClick={finalValidation}
                  title="Clique aqui para finalizar a compra"
                >
                  {isLoading ? "Finalizando compra..." : "Finalizar compra"}
                </StandardButton>
                <StandardButton
                  title="Clique aqui para voltar aos dados de entrega"
                  onClick={() => manageCartContent(1)      
                  }
                >
                  Voltar para endereço
                </StandardButton>
              </S.PaymentCart>
            </form>
            </>
          ):(
            <>
              {isSuccess && data ? (
                <>
                  <S.ConfirmCart id="confirmCart" title="Muito obrigado">
                    <S.Title>Pedido realizado - {data?.orderId}</S.Title>
                    <S.ConfirmText>
                      Estamos felizes em informar que seu pedido já está em processo de
                      preparação e, em breve, será entregue no endereço fornecido.
                      <br />
                      <br />
                      Gostaríamos de ressaltar que nossos entregadores não estão
                      autorizados a realizar cobranças extras.
                      <br />
                      <br />
                      Lembre-se da importância de higienizar as mãos após o recebimento
                      do pedido, garantindo assim sua segurança e bem-estar durante a
                      refeição.
                      <br />
                      <br />
                      Esperamos que desfrute de uma deliciosa e agradável experiência
                      gastronômica. Bom apetite!
                    </S.ConfirmText>
                    <StandardButton
                      title="Clique aqui para fechar as informações da compra"
                      onClick={() =>finalizePurchase()}
                    >
                      Concluir
                    </StandardButton>
                  </S.ConfirmCart>
                </>
              ):(
                <>
                  <p className="empty-text">
                    O carrinho está vazio, adicione pelo menos um produto para continuar
                    com a compra
                </p>
                </>
              )} 
            </>
          )
        }        
      </S.Sidebar>
    </S.CartContainer>
  );
};

export default Cart;
