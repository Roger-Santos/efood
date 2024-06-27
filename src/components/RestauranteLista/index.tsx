import Mrestaurante from '../../models/Mrestaurante'
import Restaurante from '../Rastaurante'
import { Container, List } from './styles'

export type Props = {
  restaurante: Mrestaurante[]
}

const RestauranteLista = ({ restaurante }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurante.map((restaurante) => (
          <Restaurante
            key={restaurante.id}
            title={restaurante.title}
            rating={restaurante.ratings}
            image={restaurante.image}
            infos={restaurante.infos}
            description={restaurante.description}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestauranteLista
