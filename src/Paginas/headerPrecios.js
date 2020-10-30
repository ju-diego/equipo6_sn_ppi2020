import React from "react";
import "../styles.css";
import Volver from "/src/imagenes/volver.png";
import Lista from "/src/Componentes/lista.js";
class HeaderPrecios extends React.Component {
  render() {
    return (
      <div className="container-fluid mainColor ">
        <div class="row">
          <div class="col-4">
            <button type="button" class="btn trasparente1  ">
              <a href="perfil">
                <img
                  src={Volver}
                  class="rounded float-center imgFa volver"
                  alt="70"
                />
              </a>
            </button>
          </div>
          <div class="col-4">
            <h1 className="titulo"> PRECIOS ESTANDARES </h1>{" "}
          </div>

          <div class="col-4"></div>
        </div>
        <br />
        <main>
          {" "}
          <Lista />{" "}
        </main>
      </div>
    );
  }
}

export default HeaderPrecios;
