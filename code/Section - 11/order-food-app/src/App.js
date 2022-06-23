import React, { Fragment, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [CartModule, setCartModule] = useState(false);

  const showCartModule = () => {
    setCartModule(true);
  };

  const hideCartModule = () => {
    setCartModule(false);
  };
  return (
    <Fragment>
      <CartProvider>
        {CartModule && <Cart onClick={hideCartModule} />}
        <Header onClick={showCartModule} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </Fragment>
  );
}

export default App;
