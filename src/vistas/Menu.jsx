import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Burger from "../img/burger.jpg";
import Pizza from "../img/pizza-pizza-filled-with-tomatoes-salami-and-olives.jpg"
import Papas from '../img/side-view-fried-meat-with-french-fries-and-ketchup.jpg'  
export default class Menu extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-div container-lg mb-lg-auto table-responsive-lg" id="main">
          <main className="px-3 container-lg">
            <section className="container">
              <div className="row">
                <div className="col-lg-4 mb-5 container-md">
                  <img
                    className="bd-placeholder-img rounded-circle"
                    src={Pizza}
                    //src={'/public/img/pizza-pizza-filled-with-tomatoes-salami-and-olives.jpg'}
                    width="150"
                    height="140"
                    alt=""
                  />
                  <div id="infoplato">
                  <h2>Plato 1</h2>
                  <p>Descripcion del plato y precio.</p>
                  <span>
                    <a id="detalles" className="btn btn-secondary" href="/">
                      View details &raquo;
                    </a>
                  </span>
                  </div>
                </div>
                <div className="col-lg-4 mb-5 container-md">
                  <img
                    className="bd-placeholder-img rounded-circle"
                    //src= {require('./img/bruger.jpg')}
                    src={Papas}
                    width="155"
                    height="140"
                    alt=""
                  />
                  <div id="infoplato">
                  <h2>Plato 2</h2>
                  <p>Descripcion del plato y precio.</p>
                  <span>
                    <a id="detalles" className="btn btn-secondary" href="/">
                      View details &raquo;
                    </a>
                  </span>
                  </div>
                </div>
                <div className="col-lg-4 mb-5 container-md">
                  <img
                    className="bd-placeholder-img rounded-circle"
                    //src= {require('./img/side-view-fried-meat-with-french-fries-and-ketchup.jpg')}
                    src={Burger}
                    width="160"
                    height="140"
                    alt=""
                  />
                  <div id="infoplato">
                  <h2>Plato 3</h2>
                  <p>Descripcion del plato y precio.</p>
                  <span>
                    <a id="detalles" className="btn btn-secondary" href="/">
                      View details &raquo;
                    </a>
                  </span>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </>
    );
  }
}
