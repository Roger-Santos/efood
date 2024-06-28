import styled from "styled-components";
import { cores } from "../../styles";

export const Rodape = styled.footer`
  background-color: ${cores.corFooter};
  padding: 40px;
  text-align: center;
  margin-top: 80px;
`;
export const Logo = styled.img`
  width: 125px;
`;
export const Links = styled.ul`
  display: flex;
  margin-top: 32px;
  margin-bottom: 80px;
  justify-content: center;
`;
export const Icone = styled.img`
  width: 24px;
  margin-left: 4px;
  margin-right: 4px;
`;

export const TextoFinal = styled.p`
  font-size: 12px;
`;
