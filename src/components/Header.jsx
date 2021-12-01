import React, { Component } from "react";
import Navigation from './Navigation'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div id="bar">
            <Navigation></Navigation>
          </div>
        </header>
      </div>
    );
  }
}
