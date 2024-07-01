import styled from "styled-components";
import { cores } from "../../styles";
import { Props } from "../Tag";

export const TagContainer = styled.div<Props>`
  background-color: ${cores.corTag};
  color: ${cores.corTextoTag};
  font-size: ${(props) => (props.size === "big" ? "16px" : "10px")};
  font-weight: bold;
  padding: ${(props) => (props.size === "big" ? "8px 16px" : "4px 6px")};
  display: inline-block;

  &:hover {
    filter: brightness(110%);
  }
`;
