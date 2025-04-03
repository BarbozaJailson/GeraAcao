import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Doador from "./Components/Doador/Doador";
import Usuario from "./Components/Usuario/Usuario";
import Contato from "./Components/Contato/Contato";
import Instituicao from "./Components/Instituicao/Instituicao";
import Login from "./Components/Login/Login";
import CadastroInstituicao from "./Components/CadastroInstituicao/CadastroInstituicao";
import SelectInstituicao from "./Components/SelectInstituicao/SelectInstituicao";
const Rotas = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/instituicao" element={<Instituicao />} />
          <Route path="/doador" element={<Doador />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/contato" element={<Contato />} />
          <Route
            path="/instituicao/cadastroparceiro"
            element={<CadastroInstituicao />}
          />
          <Route
            path="/instituicao/SelectInstituicao"
            element={<SelectInstituicao />}
          />
        </Routes>
      </Router>
    </>
  );
};
export default Rotas;
