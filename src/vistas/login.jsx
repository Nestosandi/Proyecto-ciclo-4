import React, { Component } from "react";
import Footer from "../components/Footer";

export default class login extends Component {
  render() {
    return (
      <>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div id="cardlogin" className="card text-white">
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4">
                      <h2 className="fw-bold mb-5 text-uppercase"><a id="ah2" href="/">Log in</a></h2>
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

                      <p className="small pb-lg-2">
                        <a className="text-light text-white-80" href="#!">
                          ¿Olvidaste tu contraseña?
                        </a>
                      </p>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Ingresar
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

                    <div>
                      <p className="mb-0">
                        ¿Aún no estás registrado?{" "}
                        <a href="/register" className="text-light fw-bold">
                          Registrate
                        </a>
                      </p>
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
