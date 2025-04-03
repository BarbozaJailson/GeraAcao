import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Instituicao.css";
import imgPesquisa from "../../Images/pesquisa/search.png";
import imgParceiro from "../../Images/parceiro/banner08.png";

const Instituicao = () => {
  const lista = [
    {
      id: 1,
      nome: "Nossa Senhora da Escada",
      cidade: "Barueri",
    },
    {
      id: 2,
      nome: "Nossa Senhora da Escada",
      cidade: "Barueri",
    },
    {
      id: 3,
      nome: "Nossa Senhora da Escada",
      cidade: "Barueri",
    },
    {
      id: 4,
      nome: "Nossa Senhora da Escada",
      cidade: "Barueri",
    },
    {
      id: 5,
      nome: "Nossa Senhora da Escada",
      cidade: "Barueri",
    },
    {
      id: 6,
      nome: "Nossa Senhora da Escada",
      cidade: "Barueri",
    },
  ];
  const myList = lista.map((item) => (
    <Link className="select_parceiro" to={"/instituicao/SelectInstituicao"}>
      <div key={item.id} className="box">
        <div className="nome">
          <p>{item.nome}</p>
        </div>
        <div className="img">
          <img src={imgParceiro} />
        </div>
        <div className="descricao">
          <p>{item.cidade}</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <>
      <Header />
      <div className="box-fullContent">
        <div className="box-content">
          {/* <!-- -----Pesquisa-------------------------------------------------------------------------------------------------------------- --> */}
          <div className="box-search_btnParceiro">
            <div className="flexHome-search">
              <div className="box-search">
                <div className="input-search">
                  <input
                    type="text"
                    id="search"
                    className="search"
                    name="search"
                    placeholder="pesquisar..."
                  />
                </div>
                <div className="button-search">
                  <img src={imgPesquisa} />
                </div>
              </div>
            </div>
            {/* <!-- -----Botão cadastrar Parceiro-------------------------------------------------------------------------------------------------------------- --> */}
            <div className="box-btn_cad_parceiro">
              <ul className="ul_btn_parceiros">
                <Link
                  className="link_btn_parceiros"
                  to={"/instituicao/cadastroparceiro"}
                >
                  <li className="li_btn_parceiros">+ instituicao</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="flexHome-parceiro">
            <h1 className="titleHome-parceiros">Gerenciar Instituição</h1>
          </div>
          <div className="flexHome-main">
            {/* <!-- -----Caixa principal de conteúdos-------------------------------------------------------------------------------------------------------------- --> */}
            <main className="box-main">
              {/* <!-- -----Caixa de parceiro-------------------------------------------------------------------------------------------------------------- --> */}
              {myList}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instituicao;
