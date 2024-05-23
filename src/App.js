import Header from "./Layout/Header";
import MealsList from "./Meals/MealsList";
import Summary from "./Meals/Summary";
import Cart from "./Cart/Cart";
import { useState } from "react";
function App() {
  const [cartshown, setCartshown] = useState(false);

  const handleShow = () => {
    setCartshown(true);
  };

  const handleClose = () => {
    setCartshown(false);
  };

  return (
    <div>
      {cartshown && <Cart onClose={handleClose} />}
      <Header onShow={handleShow} />
      <Summary />
      <MealsList />
    </div>
  );
}

export default App;
