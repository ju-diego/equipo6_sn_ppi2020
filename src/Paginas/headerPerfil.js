import React from "react";
import Perfil from "/src/imagenes/perfil.png";

import Editar from "/src/imagenes/editar.png";
import Venta from "/src/imagenes/nuevaventa.png";

import Lista from "/src/imagenes/lista.png";
import Nav from "/src/Componentes/nav.js";
import "../styles.css";

class header extends React.Component {
  render() {
    const datos = this.props.datos;
    return (
      <div className="container-fluid mainColor">
        <Nav />

        <div className="row justify-content-center ColorPerfil">
          <div className="col-sm-4">
            <div className="row justify-content-center">
              <div class="card cardPerfil text-center">
                <div class="card-body ">
                  <img src={Perfil} class=" imgPerfil " alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-PerfilCol">
          <div className="col">
            <div className="row justify-content-center">
              <button type="button" class="btn   rounded-pill">
                <img src={Lista} class="btn-loginIcon  " alt="..." />
                <a href="" className="text-decoration">
                  Ventas Actuales
                </a>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row justify-content-center">
              <button type="button" class="btn   rounded-pill">
                <img src={Venta} class="btn-loginIcon  " alt="..." />
                <a href="" className="text-decoration">
                  Nueva Venta
                </a>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row justify-content-center">
              <button type="button" class="btn   rounded-pill">
                <img src={Lista} class=" btn-loginIcon  " alt="..." />
                <a href="precios" className="text-decoration">
                  Precios
                </a>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row justify-content-center">
              <button type="button" class="btn   rounded-pill">
                <img src={Editar} class="btn-loginIcon  " alt="..." />
                <a href="editar" className="text-decoration">
                  Editar Perfil
                </a>
              </button>
            </div>
          </div>
        </div>
        <div id="descripcion" className="container containDescrip mainColor">
          <h3 className="titulo"> </h3>

          <p>
            Me encanta reciclar porque supone preservar el medio ambiente y algo
            tan importante como ayudar a la creación y al mantenimiento de
            puestos de trabajo. Porque el proceso de reciclaje de residuos
            necesita de empresas y personas trabajadoras que recojan los
            distintos materiales y los clasifiquen.{" "}
          </p>

          <br />
          <br />
          <div className="text-center">
            <button type="button" class="btn btnOpci">
              <a href="/" className="text-decoration">
                Cerrar Cesión
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default header;
