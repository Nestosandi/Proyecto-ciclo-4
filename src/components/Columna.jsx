import React, { Component } from "react";

export default class Columna extends Component {
  render() {
    return (
      <>
        <h6 id="return">
          <a id="ah2" href="/">
            <svg
              id="flecha"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 25 25"
            >
              <path
                fill="#6A696E"
                d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 00-1.41 0l-6.59 6.59a.996.996 0 000 1.41l6.59 6.59a.996.996 0 101.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"
              ></path>
            </svg>
            Regresar al menú principal
          </a>
        </h6>
      </>
    );
  }
}
