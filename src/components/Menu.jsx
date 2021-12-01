import React, { Component } from "react";

export default class Menu extends Component {
  
  render() {
    return (
      <div className="container-div container-lg" id="main">
        <main className="px-3 container-lg">
          <section className="container">
            <div className="row">
              <div className="col-lg-4 container-md">
                <img
                  className="bd-placeholder-img rounded-circle"
                  // src= {require('./img/pizza-pizza-filled-with-tomatoes-salami-and-olives.jpg')}
                  width="140"
                  height="140"
                  alt=""
                />
                <h2>Plato 1</h2>
                <p>Descripcion del plato y precio.</p>
                <span>
                  <a id="detalles" className="btn btn-secondary" href="/">
                    View details &raquo;
                  </a>
                </span>
              </div>
              <div className="col-lg-4 container-md">
                <img
                  className="bd-placeholder-img rounded-circle"
                  //src= {require('./img/bruger.jpg')}
                  width="140"
                  height="140"
                  alt=""
                />
                <h2>Plato 2</h2>
                <p>Descripcion del plato y precio.</p>
                <span>
                  <a id="detalles" className="btn btn-secondary" href="/">
                    View details &raquo;
                  </a>
                </span>
              </div>
              <div className="col-lg-4 container-md">
                <img
                  className="bd-placeholder-img rounded-circle"
                  //src= {require('./img/side-view-fried-meat-with-french-fries-and-ketchup.jpg')}
                  width="140"
                  height="140"
                  alt=""
                />
                <h2>Plato 3</h2>
                <p>Descripcion del plato y precio.</p>
                <span>
                  <a id="detalles" className="btn btn-secondary" href="/">
                    View details &raquo;
                  </a>
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
