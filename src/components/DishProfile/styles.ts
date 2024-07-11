import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Card = styled.div`
  width: 320px;
  padding: 8px;
  background-color: ${colors.lightRed};
  color: ${colors.tan};
`;
export const CardImage = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const StandardButton = styled.span`
  display: block;
  padding: 4px;
  font-size: 14px;
  background-color: ${colors.tan};
  color: ${colors.lightRed};
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }
`;

export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`;

export const ModalContent = styled.div`
  position: relative;
  width: 1024px;
  max-height: 338px;
  height: 100%;
  background-color: ${colors.lightRed};
  padding: 32px;
  color: ${colors.white};
  z-index: 3;

  .close {
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
  }

  .dados {
    display: flex;

    h2 {
      font-size: 18px;
      font-weight: 900;
      line-height: 21px;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin-bottom: 16px;
    }

    .botao {
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      padding: 4px 8px 4px 8px;
      background-color: ${colors.tan};
      color: ${colors.lightRed};
      cursor: pointer;

      &:hover {
        filter: brightness(110%);
      }
    }

    @media (max-width: ${breakpoints.tablet}) {
      display: block;

      h2 {
        margin-top: 24px;
      }
    }
  }

  .capa {
    overflow: hidden;
    object-fit: cover;
    width: 280px;
    height: 280px;
  }

  .descricao {
    margin-left: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-height: none;
  }
`;
