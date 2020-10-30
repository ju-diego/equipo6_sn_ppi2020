import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles.css";

import Login from "../Paginas/login";
import Registro from "../Paginas/registro";
import Opciones from "../Paginas/opciones";
import Principal from "../Paginas/principal";
import Perfil from "../Paginas/headerPerfil";
import Precios from "../Paginas/headerPrecios";
import Editar from "../Paginas/editar";
import Carrito from "../Paginas/carrito";
import Subasta from "../Paginas/subasta";
import Datos from "../server/datos.json";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/opciones" component={Opciones} />
        <Route exact path="/principal" component={Principal} />
        <Route
          exact
          path="/perfil"
          component={Perfil}
          datos={Datos.infoPerfil[1]}
        />
        <Route exact path="/precios" component={Precios} />
        <Route exact path="/editar" component={Editar} />
        <Route exact path="/carrito" component={Carrito} />
        <Route exact path="/subasta" component={Subasta} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
