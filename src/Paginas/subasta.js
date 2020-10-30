import React from "react";
import Nav from "/src/Componentes/nav.js";
import CardSubastas from "/src/Componentes/cardSubastas.js";
import "../styles.css";

import "../styles.css";
class Subastas extends React.Component {
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
            <CardSubastas />
          </div>
        </div>
      </div>
    );
  }
}
export default Subastas;
