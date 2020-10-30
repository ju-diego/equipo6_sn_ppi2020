import React from "react";
import "../styles.css";

class Lista extends React.Component {
  render() {
    return (
      <div className="container-fluid mainColor ">
        <table id="tabla" class="table table-striped mainColor ">
          <thead>
            <tr>
              <th scope="col">CODIGO</th>
              <th scope="col">MATERIAL</th>
              <th scope="col">MEDIDA</th>
              <th scope="col">PRECIO POR KG / UNIDAD </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>CARTÓN</td>
              <td> KG</td>
              <td> $300 </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td> VIDRIO</td>
              <td>KG</td>
              <td>$300</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>ARCHIVO</td>
              <td>KG</td>
              <td>$500</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>ALUMINIO</td>
              <td>KG</td>
              <td>$1000</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>COBRE</td>
              <td>KG</td>
              <td>$15.000</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>CHATARRA</td>
              <td>KG</td>
              <td>$800</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>ENVASES</td>
              <td>UNIDAD</td>
              <td>$300</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>CAJAS DE CARTÓN</td>
              <td>UNIDAD</td>
              <td>$300</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>PERIODICO</td>
              <td>KG</td>
              <td>$200</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>LATAS</td>
              <td>KG</td>
              <td>$1500</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Lista;
