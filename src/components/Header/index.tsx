import * as S from "./styles";
import headerImg from "../../assets/images/fundo.png";
import { Link } from "react-router-dom";

const Header = () => (
  <>
    <S.HeaderBar style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="container">
        <Link to="/">
          <S.Logo
            src={require("../../assets/images/logo.png")}
            alt="Logo do eFood"
          />
        </Link>
        <S.Title>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </S.Title>
      </div>
    </S.HeaderBar>
  </>
);

export default Header;
