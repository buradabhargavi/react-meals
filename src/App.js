import Header from "./Layout/Header";
import MealsList from "./Meals/MealsList";
import Summary from "./Meals/Summary";
import Cart from "./Cart/Cart";
function App() {
  return (
    <div>
      <Cart />
      <Header />
      <Summary />
      <MealsList />
    </div>
  );
}

export default App;
