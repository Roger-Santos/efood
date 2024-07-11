import styled from "styled-components";
import { breakpoints, colors } from "../../styles";
import fechar from "../../assets/images/fechar.png";

type InputGroupProps = {
  maxWidth?: string;
};

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  background-color: ${colors.lightRed};
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  z-index: 1;

  .empty-text {
    color: ${colors.tan};
  }
`;

export const ProductsCart = styled.div``;

export const DeliveryCart = styled.div`
  display: none;

  #paymentButton {
    margin-top: 24px;
    margin-bottom: 8px;
  }
`;

export const PaymentCart = styled.div`
  display: none;

  #finishButton {
    margin-top: 24px;
    margin-bottom: 8px;
  }
`;

export const ConfirmCart = styled.div`
  display: block;
`;

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.tan};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.lightRed};
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${colors.lightRed};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`;

export const ValueText = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.tan};
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-top: 40px;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.tan};
  margin-bottom: 16px;
`;

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || "auto"};

  label {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    color: ${colors.tan};
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.tan};
    color: ${colors.formText};
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    height: 32px;
    border: none;
    padding: 0 8px;
    width: 100%;
    margin-bottom: 8px;

    &.error {
      border: 2px solid ${colors.red};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`;

export const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ConfirmText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.tan};
  margin-bottom: 24px;
`;

export const ErrorMessage = styled.span`
  color: ${colors.white};
  font-size: 12px;
  font-weight: 400;
`;
