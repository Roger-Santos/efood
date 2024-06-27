import { Link } from 'react-router-dom'
import { Icone, Links, Logo, Rodape, TextoFinal } from './styles'

const Footer = () => (
  <>
    <Rodape>
      <Link to="/">
        <Logo src={require('../../assets/images/logo.png')} alt="Logo do eFood" />
      </Link>
      <Links>
        <li>
          <Icone
            src={require('../../assets/images/instagram.png')}
            alt="Logo do instagram"
          />
        </li>
        <li>
          <Icone
            src={require('../../assets/images/facebook.png')}
            alt="Logo do facebook"
          />
        </li>
        <li>
          <Icone
            src={require('../../assets/images/twitter.png')}
            alt="Logo do twitter"
          />
        </li>
      </Links>
      <TextoFinal>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br />
        dos produtos é toda do estabelecimento contratado.{' '}
      </TextoFinal>
    </Rodape>
  </>
)

export default Footer
