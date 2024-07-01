import { createGlobalStyle } from "styled-components";

export const cores = {
  corSite: "#FFF8F2",
  corTexto: "#E66767",
  corTextoSecundario: "#FFFFFF",
  corCard: "#FFFFFF",
  corBordaCard: "#E66767",
  corTag: "#E66767",
  corTextoTag: "#FFFFFF",
  corFooter: "#FFEBD9",
  corCardPrato: "#E66767",
  corCardPratoTexto: "#FFEBD9",
  corBotaoPerfil: "#FFEBD9",
  corBotaoTexto: "#E66767",
  corModal: "#E66767",
  corModalTexto: "#FFFFFF",
  corModalBotaoFundo: "#FFEBD9",
  corModalBotaoTexto: "#E66767",
  corCartFundo: "#E66767",
  corCartTexto: "#E66767",
  corCartTextoSecundario: "#FFEBD9",
  corCartProdutoFundo: "#FFEBD9",
  corCartBotaoFundo: "#FFEBD9",
};

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.corSite};
    color: ${cores.corTexto};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`;
