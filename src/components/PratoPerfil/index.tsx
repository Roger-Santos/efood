import { useState } from "react";
import { useDispatch } from "react-redux";
import { add, open } from '../../store/reducers/cart'
import fechar from "../../assets/images/close.png";
import {
  Botao,
  Card,
  Descricao,
  Imagem,
  Modal,
  ModalContent,
  Titulo,
} from "./styles";
import Mprato from "../../models/Mprato";

type Props = {
  prato: Mprato
};

const PratoPerfil = ({ prato }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 125) {
      return descricao.slice(0, 122) + "...";
    }
    return descricao;
  };

  const [modal, setModal] = useState({
    isVisible: false,
  });

  const closeModal = () => {
    setModal({
      isVisible: false,
    });
  };

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };

  return (
    <>
      <Card>
        <Imagem src={prato.image} alt={prato.title} />
        <Titulo>{prato.title}</Titulo>
        <Descricao>{getDescricao(prato.description)}</Descricao>
        <Botao onClick={() => {
          setModal({
            isVisible: true,
          });
        }}>Adicionar ao carrinho</Botao>
      </Card>
      <Modal className={modal.isVisible ? "visivel" : ""}>
        <ModalContent className="container">
          <img
            className="close"
            src={fechar}
            alt="Ícone de fechar"
            onClick={() => {
              closeModal();
            }}
          />

          <div className="dados">
            <div className="areaImg">
              <img className="capa" src={prato.image} alt={prato.title} />
            </div>
            <div className="descricao">
              <h2>{prato.title}</h2>
              <p>
                {prato.description}
                <br />
                <br />
                Serve de {prato.porcao}
              </p>
              <span className="botao" onClick={addToCart}>
                Adicionar ao carrinho - {formataPreco(prato.preco)}
              </span>
            </div>
          </div>
        </ModalContent>
        <div
          onClick={() => {
            closeModal();
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  );
};

export default PratoPerfil;
