import { HeaderBar, Logo, Titulo } from './styles'
import headerImg from '../../assets/images/fundo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <>
    <HeaderBar style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="container">
        <Link to="/">
        <Logo
          src={require('../../assets/images/logo.png')}
          alt="Logo do eFood"
        />
        </Link>
        <Titulo>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </Titulo>
      </div>
    </HeaderBar>
  </>
)

export default Header
