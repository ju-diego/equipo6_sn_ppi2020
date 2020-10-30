import React from "react";
import "../styles.css";
import Volver from "/src/imagenes/volver.png";
class HeaderReg extends React.Component {
  render() {
    return (
      <div className="headerR">
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
            <h1 className="titulo"> EDITAR PERFIL</h1>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderReg;
