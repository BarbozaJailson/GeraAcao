import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to={"/home"}>
        <div className="boxout-logo">
          <div className="boxin-logo">
            {/* <p className="txtlogo">GeraAção</p> */}
          </div>
        </div>
      </Link>
      <div className="nav">
        <ul>
          <Link className="nav-link" to={"/home"}>
            <li>HOME</li>
          </Link>

          <li>|</li>

          <Link className="nav-link" to={"/instituicao"}>
            <li>INSTTITUICAO</li>{" "}
          </Link>

          <li>|</li>

          <Link className="nav-link" to={"/doador"}>
            <li>DOADORES</li>
          </Link>

          <li>|</li>
          <Link className="nav-link" to={"/usuario"}>
            <li>USUARIOS</li>
          </Link>

          <li>|</li>

          <Link className="nav-link" to={"/contato"}>
            <li>CONTATOS</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
