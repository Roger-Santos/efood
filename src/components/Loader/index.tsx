import { PropagateLoader } from "react-spinners";
import { Container } from "./styles";
import { colors } from "../../styles";

const Loader = () => (
  <Container>
    <PropagateLoader color={colors.lightRed} />
  </Container>
);

export default Loader;
