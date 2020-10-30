import React from "react";
import HeaderReg from "/src/Componentes/headerRegistro.js";
import "../styles.css";


class registro extends React.Component {
  render() {
    return (
      <div className="container-fluid registro mainColor">
        <header>
          <HeaderReg />
        </header>
        <br />
        <br />

        <div className="container ">
          <div className="row justify-content-center ">
            <div className="col-sm-6 ">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Nombre Completo</label>
                  <input
                    type="email"
                    class="form-control form-text form-regis rounded-pill"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    .
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1 ">Email address</label>
                  <input
                    type="email"
                    class="form-control form-text form-regis rounded-pill"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" class="form-text ">
                    Nunca compartiremos su correo electrónico con nadie más.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Documento de identidad</label>
                  <input
                    type="email"
                    class="form-control form-text form-regis rounded-pill"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control form-text form-regis rounded-pill"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    class="form-control form-text form-regis rounded-pill"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input "
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Acepto terminos y condiciones
                  </label>
                </div>
                <div className="text-center">
                  <button
                    id="btnre"
                    type="button"
                    class="btn btnRegi rounded-pill"
                  >
                    {" "}
                    <a className="text-decoration" href="opciones">
                      Continuar
                    </a>{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default registro;
