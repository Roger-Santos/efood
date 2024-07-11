import { Link } from "react-router-dom";
import * as S from "./styles";

const Footer = () => (
  <>
    <S.FooterMain>
      <Link to="/">
        <S.Logo
          src={require("../../assets/images/logo.png")}
          alt="Logo do eFood"
        />
      </Link>
      <S.Links>
        <li>
          <S.Icon
            src={require("../../assets/images/instagram.png")}
            alt="Logo do instagram"
          />
        </li>
        <li>
          <S.Icon
            src={require("../../assets/images/facebook.png")}
            alt="Logo do facebook"
          />
        </li>
        <li>
          <S.Icon
            src={require("../../assets/images/twitter.png")}
            alt="Logo do twitter"
          />
        </li>
      </S.Links>
      <S.FinalText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br />
        dos produtos é toda do estabelecimento contratado.{" "}
      </S.FinalText>
    </S.FooterMain>
  </>
);

export default Footer;
