import Header from "./Layout/Header";
import MealsList from "./Meals/MealsList";
import Summary from "./Meals/Summary";
import Cart from "./Cart/Cart";
import { useState } from "react";
import CartProvider from "./Store/CartProvider";
function App() {
  const [cartshown, setCartshown] = useState(false);

  const handleShow = () => {
    setCartshown(true);
  };

  const handleClose = () => {
    setCartshown(false);
  };

  return (
    <CartProvider>
      {cartshown && <Cart onClose={handleClose} />}
      <Header onShow={handleShow} />
      <Summary />
      <MealsList />
    </CartProvider>
  );
}

export default App;
