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
`;
