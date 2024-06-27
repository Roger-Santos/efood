import { HeaderBar, HeaderElementos, HeaderTextos, Logo } from './styles'
import headerImg from '../../assets/images/fundo.png'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => (
  <>
    <HeaderBar style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="container">
        <HeaderElementos>
          <HeaderTextos>Restaurantes</HeaderTextos>
          <Link to="/">
          <Logo
            src={require('../../assets/images/logo.png')}
            alt="Logo do eFood"
          />
          </Link>
          <HeaderTextos>0 produto(s) no carrinho</HeaderTextos>
        </HeaderElementos>
      </div>
    </HeaderBar>
  </>
)

export default HeaderPerfil
