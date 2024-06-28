import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Especialidade = styled.h3`
  position: absolute;
  font-size: 32px;
  font-weight: 100;
  margin-top: 24px;
  color: ${cores.corTextoSecundario};
`;

export const NomeRestaurante = styled.h1`
  position: absolute;
  font-size: 32px;
  font-weight: 900;
  margin-top: 214px;
  color: ${cores.corTextoSecundario};
`;
