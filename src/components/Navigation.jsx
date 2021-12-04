import React, { Component } from "react";

export default class Navigation extends Component {
  /*   constructor(props) {
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
  } */
  render() {
    return (
  <nav className="navbar navbar-expand-lg align-bottom">
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
        <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="menu-toggle"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse navbar-nav" id="navbarSupportedContent">
          <a className="nav-item nav-link active ms-auto" id="color" href="/">
            ¿Quienes somos?
          </a>
          <a className="nav-item nav-link active ms-auto" id="color" href="/menu">
            Menú
          </a>
          <a className="nav-item nav-link active ms-auto" id="color" href="/mesas">
            Mesas
          </a>
          <a className="nav-item nav-link active ms-auto" id="color" href="/register">
            Ordena Aquí
          </a>
          <div className="dropdown ms-auto">
            <button className="dropbtn">Ingresa</button>
            <div className="dropdown-content">
              <a href="/login">Log in</a>
              <a href="/register">Registro</a>
            </div>
          </div>
        </div>
        </div>
      </nav> 
/*       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                data-mdb-ripple-color="dark"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */
    );
  }
}
