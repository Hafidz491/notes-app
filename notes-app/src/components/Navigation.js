import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className="notes-app_header">
      <h1 className="title-navbar">
        <Link to={"/"}>Aplikasi Catatan</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to={"/arsip"}>Arsip</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
