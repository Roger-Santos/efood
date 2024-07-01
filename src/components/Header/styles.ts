import styled from "styled-components";
import { breakpoints } from "../../styles";

export const HeaderBar = styled.header`
  widht: 100%;
  height: 384px;
  text-align: center;
`;
export const Logo = styled.img`
  width: 125px;
  margin-top: 64px;
`;
export const Titulo = styled.h1`
  font-size: 36px;
  margin-top: 138px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`;
