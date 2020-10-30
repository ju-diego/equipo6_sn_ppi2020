import React from "react";
import Carton from "/src/imagenes/carton.jpg";
import Info from "/src/imagenes/informa.png";

class CardSubastas extends React.Component {
  render() {
    return (
      <div className="container-fluid card-container">
        <div className="row justify-content-center">
          <div className="col-sm-5 ">
            <div class="card tarjeta">
              <img src={Carton} class="" alt="..." />
              <div class="card-body colorTp text-center">
                <h4>Cartón - 3Kg - 10.000$</h4>
                <p>Juan Jose Lopez Macias</p>
                <div className="row">
                  <div className="col">
                    <button type="button" className="btn">
                      <img src={Info} class=" btnTarjeta" alt="..." />
                    </button>
                  </div>
                  <div className="col">
                    <button type="button  " className="btn btnAgregar">
                      <a href="carrito" className="text-decoration">
                        Subastar
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-5 ">
            <div class="card tarjeta ">
              <img src={Carton} class="" alt="..." />
              <div class="card-body colorTp text-center">
                <h4>Cartón - 10kg - 8.000$</h4>
                <p>Juan Diego Sierra</p>
                <div className="row">
                  <div className="col">
                    <button type="button" className="btn">
                      <img src={Info} class=" btnTarjeta" alt="..." />
                    </button>
                  </div>
                  <div className="col">
                    <button type="button  " className="btn btnAgregar">
                      <a href="carrito" className="text-decoration">
                        Subastar
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardSubastas;
