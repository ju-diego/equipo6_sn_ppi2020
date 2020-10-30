import React from "react";

import Imggo from "/src/imagenes/facebook.png";
import Imgf from "/src/imagenes/google.png";
import "../styles.css";

class login extends React.Component {
  render() {
    return (
 
      <div className="container-fluid  login-container d-flex align-items-center justify-content-center">
        <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div class="content">
<div className="row">
          <div col>
            <div class="card login-card text-center">
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Correo electronico</label>
                    <input
                      type="email"
                      class="form-control form-login rounded-pill"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input
                      type="password"
                      class="form-control form-login rounded-pill"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="form-group  form-check">
                    <input
                      type="checkbox"
                      class="form-check-input form-login "
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      recordar
                    </label>
                  </div>
                  <button type="button" class="btn btn-login rounded-pill">
                    <a href="principal" className="text-decoration">
                      Siguiente
                    </a>
                  </button>
                  <button type="button" class="btn btn-login rounded-pill">
                    <a href="registro" className="text-decoration">
                      Registrarse
                    </a>
                  </button>
                  <div>
                    <img src={Imggo} class="btn-loginIcon  " alt="..." />
                    <img src={Imgf} class="btn-loginIcon " alt="..." />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
 
</div>
     
      </div>
    );
  }
}
export default login;
