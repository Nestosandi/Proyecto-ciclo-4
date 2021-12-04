import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default class Landing extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div className="container-fluid" id="weare">
          <div className="container mt-lg-5 mb-lg-5 layout__section justify-content-center align-items-center">
            <div className="align-content-center text-center">
              <h2 className="fw-bold mb-5">¿Quienes somos?</h2>
              <p>
                Fugiat aliquip labore in fugiat eu sint voluptate consectetur ut
                aliquip consequat ea excepteur. Elit reprehenderit cillum dolor
                Lorem exercitation commodo incididunt proident occaecat eiusmod
                qui non. Reprehenderit reprehenderit sit qui do sint elit. Est
                cupidatat occaecat esse exercitation eu pariatur. Labore culpa
                occaecat consequat laboris cupidatat dolore ut qui cillum aliqua
                laborum cupidatat voluptate commodo. Consequat amet minim
                commodo do eiusmod sit elit ullamco in culpa mollit nisi sit
                nisi. Ea exercitation ullamco fugiat occaecat consequat amet id
                ex eu nulla nulla ex.
              </p>
            </div>
          </div>
        </div>
        <section id="index" className="container-div container-fluid">
          <div>hola</div>
        </section>
        <Footer></Footer>
      </>
    );
  }
}
