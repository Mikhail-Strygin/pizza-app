import "../styles/app.scss";
import React from "react";
import Categories from "./Categories.jsx";
import Header from "./Header.jsx";
import PizzaBlock from "./PizzaBlock.jsx";
import Sort from "./Sort.jsx";
import Skeleton from "./Skeleton.jsx";
// import pizzas from "../assets/pizzas.json";
function App() {
  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://67cb06dc3395520e6af40a40.mockapi.io/items")
      .then((resp) => resp.json())
      .then((data) => setPizzas(data))
      .finally(() => setLoading(false))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {!loading ? (
              pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
            ) : (
              <div>
                {[...new Array(10)].map((_, ind) => (
                  <Skeleton key={ind} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
