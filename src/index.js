import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Pão com azeite italiano e alecrim",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Marguerita",
    ingredients: "Tomate e mussarela",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza de Espinafre",
    ingredients: "Tomate, mussarela, espinafre e ricotta",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza de Champingnon",
    ingredients: "Tomate, mussarela, cogumelos e cebola",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza de Pepperoni",
    ingredients: "Tomate, mussarela e pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza de Presunto",
    ingredients: "Tomate, mussarela, presunto, rúcula e queijo burrata",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Pizzaria Bonapettite</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Nosso Cardápio</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Culinária italiana autêntica. 6 pratos criativos para você escolher.
            Todos feitos em forno a lenha, todos orgânicos e deliciosos.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Ainda estamos trabalhando no nosso cardápio. Volte mais tarde! :)</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          Ficaremos felizes de recebê-o entre {openHour}:00 e {closeHour}:00
        </p>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "Estamos abertos");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        Estamos abertos de {openHour}:00 até {closeHour}:00. Venha nos visitar
        ou deixe um pedido online.
      </p>
      <div className="btn">Pedir</div>
    </div>
  );
}
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
