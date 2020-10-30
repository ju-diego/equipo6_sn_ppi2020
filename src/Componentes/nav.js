import React from "react";

import ImgHome from "/src/imagenes/casa.png";
import ImgCarrito from "/src/imagenes/carro.png";
import ImgBolsa from "/src/imagenes/bolsa.png";
import ImgAvatar from "/src/imagenes/avatar.png";
import ImgLupa from "/src/imagenes/lupa.png";

class nave extends React.Component {
  render() {
    return (
      <div className="col">
        <div className="navPrincipal ">
          <nav class="navbar   navbar-expand-md navbar-dark ">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse justify-content-center navbar-collapse"
              id="navbarTogglerDemo01"
            >
              <ul class="nav  ">
                <li class="nav-item prin">
                  <a class="nav-link text-decoration" href="principal">
                    <img src={ImgHome} class="ImagenNav " alt="..." />
                    Principal
                  </a>
                </li>
                <li class="nav-item prin">
                  <a class="nav-link active text-decoration" href="carrito">
                    <img src={ImgCarrito} class="ImagenNav" alt="..." />
                    Carrito
                  </a>
                </li>

                <li class="nav-item prin">
                  <a class="nav-link text-decoration" href="subasta">
                    <img src={ImgBolsa} class="ImagenNav" alt="..." />
                    Subasta
                  </a>
                </li>
                <li class="nav-item prin">
                  <a a class="nav-link text-decoration" href="perfil">
                    <img src={ImgAvatar} class="ImagenNav " alt="..." />
                    Perfil
                  </a>
                </li>
                <li class="nav-item prin">
                  <a a class="nav-link text-decoration" href="perfil">
                    <img src={ImgLupa} class="ImagenNav " alt="..." />
                    Buscar
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default nave;
