import styled from "styled-components";
import { breakpoints, colors } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 472px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 340px;
    grid-template-columns: 1fr;
  }
`;
export const RestaurantImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`;
export const RestaurantType = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
export const CardBackground = styled.div`
  padding: 8px;
  border: solid ${colors.lightRed} 1px;
  border-top: none;
`;
export const TitleRateArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const RateArea = styled.div`
  display: flex;
`;
export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
`;
export const Rate = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-right: 8px;
`;
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`;
