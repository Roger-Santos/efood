import { useDispatch, useSelector } from "react-redux"
import { CartContainer, CartItem, Overlay, Sidebar, TextoValor } from "./styles"
import { RootReducer } from "../../store"
import { close, remove } from '../../store/reducers/cart'
import { Botao } from "../PratoPerfil/styles"

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
      }

      const removeItem = (id: number) => {
        dispatch(remove(id))
      }

      const formataPreco = (preco = 0) => {
        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(preco);
      };

      const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
          return (acumulador += valorAtual.preco!)
        }, 0)
      }
    
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
       <Sidebar>
       <ul>
       {items.map((item) => (
        <CartItem key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
            <h3>{item.title}</h3>
            <span>{formataPreco(item.preco)}</span>
            </div>
              <button onClick={() => removeItem(item.id)} type="button" />
        </CartItem>
       ))}
       </ul>
       <TextoValor>
        <p>Valor total</p>
        <p>{formataPreco(getTotalPrice())}</p>
       </TextoValor>
       <Botao>Continuar com a entrega</Botao>        
       </Sidebar>
    </CartContainer>
  )
}

export default Cart
