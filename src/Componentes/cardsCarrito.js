import React from "react";

import Carton from "/src/imagenes/carton.jpg";
import "../styles.css";
class Carrito extends React.Component {
  render() {
    return (
      <div className="container-fluid registro mainColor">
        
        <br />
        <div className="container mainColor">
          <div class="card-deck mainColor">
            <div class="card  tarjeta11">
              <img
                src={Carton}
                class="card-img-top tarjeta tamañoT"
                alt="..."
              />
              <div class="card-body    ">
                <h5 class="card-title">Carton usado</h5>
                <p class="card-text  ">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted"> Guardado hace 2 minutos</small>
                </p>
                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Confirmar
  </label>
</div>
                
                <button type="button  " className="btn btnBorrar">
                  Borrar
                </button>
                <button type="button  " className="btn btn-login">
                  Comprar
                </button>
              </div>
            </div>
            <div class="card  tarjeta11">
              <img
                src={Carton}
                class="card-img-top tarjeta tamañoT "
                alt="..."
              />
              <div class="card-body   ">
                <h5 class="card-title">Cartón Viejo</h5>
                <p class="card-text  ">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Guardado hace 1 dia</small>
                </p>
                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Confirmar
  </label>
</div>
               

                <button type="button  " className="btn btnBorrar">
                  Borrar
                </button>
                <button type="button  " className="btn btn-login">
                  Comprar
                </button>
              </div>
            </div>
            <div class="card   tarjeta11">
              <img
                src={Carton}
                class="card-img-top tarjeta tamañoT"
                alt="..."
              />
              <div class="card-body ">
                <h5 class="card-title">Cartón 5kg </h5>
                <p class="card-text  ">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted"> Guardado hace 1 mes</small>
                </p>
                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Confirmar
  </label>
</div>
               

                <button type="button  " className="btn btnBorrar">
                  Borrar
                </button>
                <button type="button  " className="btn btn-login">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container mainColor">
          <div class="card-deck mainColor">
            <div class="card  tarjeta11">
              <img
                src={Carton}
                class="card-img-top tarjeta tamañoT"
                alt="..."
              />
              <div class="card-body    ">
                <h5 class="card-title">Card title</h5>
                <p class="card-text  ">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted"> Guardado hace 2 minutos</small>
                </p>
                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Confirmar
  </label>
</div>
              
                <button type="button  " className="btn btnBorrar">
                  Borrar
                </button>
                <button type="button  " className="btn btn-login">
                  Comprar
                </button>
              </div>
            </div>
            <div class="card  tarjeta11">
              <img
                src={Carton}
                class="card-img-top tarjeta tamañoT "
                alt="..."
              />
              <div class="card-body   ">
                <h5 class="card-title">Card title</h5>
                <p class="card-text  ">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Guardado hace 1 dia</small>
                </p>
                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Confirmar
  </label>
</div>

                <button type="button  " className="btn btnBorrar">
                  Borrar
                </button>
                <button type="button  " className="btn btn-login">
                  Comprar
                </button>
              </div>
            </div>
            <div class="card   tarjeta11">
              <img
                src={Carton}
                class="card-img-top tarjeta tamañoT"
                alt="..."
              />
              <div class="card-body ">
                <h5 class="card-title">Card title</h5>
                <p class="card-text  ">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted"> Guardado hace 1 mes</small>
                </p>
                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Confirmar
  </label>
</div>

                <button type="button  " className="btn btnBorrar">
                  Borrar
                </button>
                <button type="button  " className="btn btn-login">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carrito;