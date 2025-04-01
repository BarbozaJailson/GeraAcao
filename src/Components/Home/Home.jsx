import React from "react";
import imgParceiro from "../../Images/home/parceiro.jpg";
import imgDoador from "../../Images/home/doador.png";
import imgUsurio from "../../Images/home/usuario.jpg";
import imgContato from "../../Images/home/contato.jpg";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "../Home/Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="box-fullContent">
        <div className="box-content">
          <div className="flexHome-main">
            <main className="box-main">
              <div className="box-home">
                {/* <!-- -----Caixa de parceiros-------------------------------------------------------------------------------------------------------------- --> */}
                <div className="home-pages">
                  <div className="box-imagem">
                    <Link className="home-link" to={"/instituicao"}>
                      <img src={imgParceiro} />
                    </Link>
                  </div>
                  <Link className="home-link" to={"/instituicao"}>
                    <div className="home-info">
                      <div className="box-nome">
                        <p className="home-nome">Instituição</p>
                      </div>
                      <div className="box-descricao">
                        <p className="home-descrição">
                          As instituições são responsaveis por receber as
                          doações atravez de solicitações feitas por elas
                          mesmas.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* <!-- -----Caixa de doadores-------------------------------------------------------------------------------------------------------------- --> */}
                <div className="home-pages">
                  <div className="box-imagem">
                    <Link className="home-link" to={"/doador"}>
                      <img src={imgDoador} />
                    </Link>
                  </div>
                  <Link className="home-link" to={"/doador"}>
                    <div className="home-info">
                      <div className="box-nome">
                        <p className="home-nome">Doadores</p>
                      </div>
                      <div className="box-descricao">
                        <p className="home-descrição">
                          Nossos doadores são responsaveis po todas as doações
                          feitas atravez de solicitações de parceiros.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* <!-- -----Caixa de usuarios-------------------------------------------------------------------------------------------------------------- --> */}
                <div className="home-pages">
                  <div className="box-imagem">
                    <Link className="home-link" to={"/usuario"}>
                      <img src={imgUsurio} />
                    </Link>
                  </div>

                  <Link className="home-link" to={"/usuario"}>
                    <div className="home-info">
                      <div className="box-nome">
                        <p className="home-nome">Usuarios</p>
                      </div>
                      <div className="box-descricao">
                        <p className="home-descrição">
                          Nossos usuarios são responsaveis em dar suporte aos
                          doadores e aos parceiros no controle de dados.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* <!-- -----Caixa de contatos-------------------------------------------------------------------------------------------------------------- --> */}
                <div className="home-pages">
                  <div className="box-imagem">
                    <Link className="home-link" to={"/contato"}>
                      <img src={imgContato} />
                    </Link>
                  </div>
                  <Link className="home-link" to={"/contato"}>
                    <div className="home-info">
                      <div className="box-nome">
                        <p className="home-nome">Contatos</p>
                      </div>
                      <div className="box-descricao">
                        <p className="home-descrição">
                          Confira todos os nossos meios de contatos em que
                          podemos ser contatados por todos.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
