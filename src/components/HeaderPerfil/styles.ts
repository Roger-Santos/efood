import styled from "styled-components";
import { breakpoints } from "../../styles";

export const HeaderBar = styled.header`
  height: 186px;
  text-align: center;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const HeaderElementos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 63px;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    padding-top: 32px;
  }
`;
export const HeaderTextos = styled.span`
  font-size: 18px;
  font-weight: 900;
`;
export const Logo = styled.img`
  width: 125px;
  
  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;
