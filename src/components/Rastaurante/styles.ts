import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
  background-color: ${cores.corCard};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`;
export const Imagem = styled.img`
  width: 472px;
  Height: 217px;
  object-fit: cover;
`;
export const Tipo = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
export const Fundo = styled.div`
  padding: 8px;
  border: solid ${cores.corBordaCard} 1px;
  border-top: none;
`;
export const AreaTituloRating = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const AreaRating = styled.div`
  display: flex;
`;
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
`;
export const Nota = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-right: 8px;
`;
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`;
