import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { GlobalCss } from "./styles";
import Rotas from "./routes";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
