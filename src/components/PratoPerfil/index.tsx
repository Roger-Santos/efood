import { Botao, Card, Descricao, Imagem, Titulo } from "./styles";

type Props = {
  title: string;
  image: string;
  description: string;
};

const PratoPerfil = ({ title, image, description }: Props) => (
  <Card>
    <Imagem src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao>Adicionar ao carrinho</Botao>
  </Card>
);

export default PratoPerfil;
