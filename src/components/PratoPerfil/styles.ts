import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
  width: 320px;
  padding: 8px;
  background-color: ${cores.corCardPrato};
  color: ${cores.corCardPratoTexto};
`;
export const Imagem = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
  margin-bottom: 8px;
`;

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const Botao = styled.span`
  display: block;
  padding: 4px;
  font-size: 14px;
  background-color: ${cores.corBotaoPerfil};
  color: ${cores.corBotaoTexto};
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
  height: 338px;
  background-color: ${cores.corModal};
  padding: 32px;
  color: ${cores.corModalTexto};
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
      background-color: ${cores.corModalBotaoFundo};
      color: ${cores.corModalBotaoTexto};
      cursor: pointer;

      &:hover {
        filter: brightness(110%);
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
`;
