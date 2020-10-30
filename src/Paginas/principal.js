import React from "react";
import Nav from "/src/Componentes/nav.js";
import Cards from "/src/Componentes/cards.js";
import "../styles.css";

import "../styles.css";
class MainPrincipal extends React.Component {
  render() {
    return (
      <div className="container-fluid mainColor ">
        <div className="container-fluid">
          <div className="row">
            <Nav />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <Cards />
          </div>
        </div>
        
      </div>
    );
  }
}
export default MainPrincipal;
