import React, { Component } from "react";
import Footer from "../components/Footer";
export default class register extends Component {
  render() {
    return (
      <>
        <section className="vh-120 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div id="cardregister" className="card text-white">
                  <div className="card-body p-5 text-center">
                    <div>
                      <h2 className="fw-bold mb-5 text-uppercase"><a id="ah2" href="/">Registro</a></h2>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder="Email"
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          placeholder="Contraseña"
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="id"
                          id="typeIdX"
                          className="form-control form-control-lg"
                          placeholder="Cedula"
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="name"
                          id="typeNameX"
                          className="form-control form-control-lg"
                          placeholder="Nombre"
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="lastname"
                          id="typeLastnameX"
                          className="form-control form-control-lg"
                          placeholder="Apellido"
                        />
                      </div>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Registrar
                      </button>

                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white">
                          <i className="fab fa-facebook-f fa-lg"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-google fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </>
    );
  }
}
