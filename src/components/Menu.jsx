import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <nav className="navbar is-dark">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Strona główna
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">Więcej!</div>
            <div className="navbar-dropdown is-boxed">
              <Link className="navbar-item" to="/users">
                Uzytkownicy
              </Link>
              <Link className="navbar-item" to="/posts">
                Posty
              </Link>
              <Link className="navbar-item" to="/photos">
                Zdjęcia
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
