import React from "react";
import "../styles.css";
import Nav from "/src/Componentes/nav.js";
import CardsCarrito from "/src/Componentes/cardsCarrito.js";
class Carrito extends React.Component {
  render() {
    return (
      <div className="container-fluid mainColor">
        <div className="container-fluid">
          <div className="row">
            <Nav />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <CardsCarrito />
          </div>
        </div>
      </div>
    );
  }
}

export default Carrito;
