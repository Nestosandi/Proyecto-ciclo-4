import React, { Component } from "react";
import Return from "../components/Columna";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Mesa from '../img/tables.gif'
export default class Mesas extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="column" className="container container-div container-fluid">
        <Return></Return>
        </div>
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main id="mesitas" class="px-3">
            <div>
              <img src={Mesa} width="80%" height="100%" alt="" />
            </div>
          </main>
        </div>
        <Footer />
      </>
    );
  }
}
