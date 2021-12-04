import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer" className="my-4 mb-0">
          <div className="container p-2 mt-4 mb-3">
            <div className="text-center">
              <span>
                <h6 className="text-center text-black text-reset fw-bold">
                  Email: OrdenApp@gmail.com
                </h6>
              </span>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
