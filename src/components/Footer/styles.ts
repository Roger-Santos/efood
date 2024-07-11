import styled from "styled-components";
import { colors } from "../../styles";

export const FooterMain = styled.footer`
  background-color: ${colors.tan};
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
export const Icon = styled.img`
  width: 24px;
  margin-left: 4px;
  margin-right: 4px;
`;

export const FinalText = styled.p`
  font-size: 12px;
`;
