import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Container = styled.section`
  padding: 32px 0;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;
