import { Link } from 'react-router-dom'
import { Tag } from '../Tag'
import {
  Card,
  Imagem,
  Infos,
  Fundo,
  AreaTituloRating,
  Titulo,
  AreaRating,
  Nota,
  Descricao
} from './styles'

type Props = {
  title: string
  rating: string
  image: string
  infos: string[]
  description: string
}

const Restaurante = ({ title, rating, image, infos, description }: Props) => (
  <Card>
    <Imagem src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Fundo>
      <AreaTituloRating>
        <Titulo>{title}</Titulo>
        <AreaRating>
          <Nota>{rating}</Nota>
          <img src={require('../../assets/images/estrela.png')} />
        </AreaRating>
      </AreaTituloRating>
      <Descricao>{description}</Descricao>
      <Link to="/Perfil">
        <Tag>Saiba mais</Tag>
      </Link>
    </Fundo>
  </Card>
)

export default Restaurante
