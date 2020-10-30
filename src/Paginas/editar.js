import React from "react";
import "../styles.css";
import HeaderE from "/src/Componentes/headerEditar.js";
import ImgHome from "/src/imagenes/inserta-imagen.png";
import "../styles.css";
class HeaderEditar extends React.Component {
  render() {
    return (
      <div className="container-fluid registro mainColor">
        <header>
          <HeaderE />
        </header>
        <br />
        <br />
        <div className="container ">
          <div className="row justify-content-center ">
            <div className="col-sm-6 text-xenter ">
              <div className="row justify-content-center">
                <button className="btn btnOpci">
                  <img src={ImgHome} class="ImagenOpc " alt="..." />
                </button>
              </div>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Nombres </label>
                  <input
                    type="email"
                    class="form-control form-text form-regis rounded-pill"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1"> Apellidos </label>
                  <input
                    type="email"
                    class="form-control form-text form-regis rounded-pill"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Biografia </label>
                  <textarea
                    class="form-control form-regis form-text formOpc rounded-pill"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </form>
              <div className="row justify-content-center ">
                <button type="button" className=" btnRegi btn rounded-pill">
                  Finalizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderEditar;
