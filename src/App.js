import Header from "./Layout/Header";
import MealsList from "./Meals/MealsList";
import Summary from "./Meals/Summary";
function App() {
  return (
    <div>
      <Header />
      <Summary />
      <MealsList />
    </div>
  );
}

export default App;
