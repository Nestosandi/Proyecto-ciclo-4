import React, { Component } from "react";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.menusito = this.menusito.bind(this);
  }

  menusito() {
    var x = document.getElementById("navbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg align-bottom" >
        <a className="navbar-brand" href="/" id="brand">
          {/*<img
          src=""
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />*/}
          OrdenApp
        </a>
        <i className="fas fa-bars menu-toogle"></i>
        <div
          className="collapse navbar-collapse navbar-nav"
          id="navbar"
          onClick={this.menusito}
        >
          <a className="nav-item nav-link active" id="color" href="/nosotros">
            ¿Quienes somos?
          </a>
          <a className="nav-item nav-link active" id="color" href="/menu">
            Menú
          </a>
          <a className="nav-item nav-link active" id="color" href="/mesas">
            Mesas
          </a>
          <a className="nav-item nav-link active" id="color" href="/registro">
            Ordena Aquí
          </a>
          <div className="dropdown">
            <button className="dropbtn">Ingresa</button>
            <div className="dropdown-content">
              <a href="/login">Log in</a>
              <a href="/register">Registro</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
