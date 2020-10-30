import React from "react";
import HeaderReg from "/src/Componentes/headerOpciones.js";
import "../styles.css";
import ImgHome from "/src/imagenes/avatar.png";
import Ubicacion from "/src/imagenes/ubicacion.png";
import "../styles.css";
class Opciones extends React.Component {
  render() {
    return (
      <div className="container-fluid registro mainColor">
        <header>
          <HeaderReg />
        </header>

        <div className="row rowOpciones justify-content-center">
          <div clasName="col-sm-6 ">
            <div>
              <h4> Ingresa foto de Usuario</h4>
              <div className="row justify-content-center">
                <div clasName="col-sm-6">
                  <div>
                    <button className="btn btnOpci">
                      <img src={ImgHome} class="ImagenOpc " alt="..." />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row rowOpciones justify-content-center">
          <div clasName="col-sm-6">
            <div>
              <h4> Ingresa tu Ubicación</h4>
              <div className="row justify-content-center">
                <div clasName="col-sm-6">
                  <div>
                    <button className="btn btnOpci">
                      <img src={Ubicacion} class="ImagenOpc " alt="..." />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <h3> Escribe una biografia</h3>
            <textarea
              class="form-control form-regis formOpc"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <div>
              <button type="button" className=" btnRegi btn rounded-pill">
                <a href="principal" className="text-decoration">
                  Finalizar
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Opciones;
