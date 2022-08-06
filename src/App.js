import React,{useContext} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContext from "./context/cart-context";
function App() {
  const ctx = useContext(CartContext);
  return (
    <React.Fragment>
      {ctx.isCartButtonClicked && <Cart/>}
      <Header/>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
