import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'


import fechar from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.corCartFundo};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.corCartProdutoFundo};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${cores.corCartTexto};
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${cores.corCartTexto};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
  }
`
export const TextoValor = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.corCartTextoSecundario};
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-top:40px;
  margin-bottom: 16px;
`

