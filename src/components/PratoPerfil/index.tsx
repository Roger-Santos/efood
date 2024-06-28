import { useState } from "react";
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

type Props = {
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  porcao: string;
};

const PratoPerfil = ({ nome, foto, preco, descricao, porcao }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 130) {
      return descricao.slice(0, 127) + "...";
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
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <Card
        onClick={() => {
          setModal({
            isVisible: true,
          });
        }}
      >
        <Imagem src={foto} alt={nome} />
        <Titulo>{nome}</Titulo>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <Botao>Adicionar ao carrinho</Botao>
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
            <div className="areaImg"><img className="capa" src={foto} alt={nome} /></div>            
            <div className="descricao">
              <h2>{nome}</h2>
              <p>
                {descricao}<br/><br/>
                Serve de {porcao}
              </p>
              <span className="botao">Adicionar ao carrinho - {formataPreco(preco)}</span>             
            </div>
          </div>
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  );
};

export default PratoPerfil;
