import Header from "../Header/Header";
import "../SelectInstituicao/SelectInstituicao.css";
import imgCalca from "../../Images/doacoes/calça masculina.jpg";
import imgCamisa from "../../Images/doacoes/camisa masculina.jpg";
import imgEdredom from "../../Images/doacoes/edredon.jpg";
import imgEdredonCasal from "../../Images/doacoes/edredon.jpg";
const SelectInstituicao = () => {
  const list = [
    {
      id: 1,
      img: imgCalca,
      nome: "Calça jeans preta",
      tamanho: "48",
      status: "Em analise",
      quantidade: 2,
    },
    {
      id: 2,
      img: imgCamisa,
      nome: "Camiseta",
      tamanho: "M",
      status: "Em analise",
      quantidade: 1,
    },
    {
      id: 3,
      img: imgEdredom,
      nome: "Edredon",
      tamanho: "Solteiro",
      status: "Finalizado",
      quantidade: 5,
    },
    {
      id: 4,
      img: imgEdredonCasal,
      nome: "Short",
      tamanho: "Casal",
      status: "Cancelado",
      quantidade: 3,
    },
  ];
  const listar = list.map((item) => (
    <div key={item.id} className="box-doador">
      <div className="box-img-nome-doador">
        <div className="box-imagem-doador">
          <img className="img-doador" src={item.img} alt="" />
        </div>
        <div className="box-info1-doador">
          <p className="nome-doador">Nome: {item.nome}</p>
          <p className="sexo-doador">Tamanho: {item.tamanho}</p>
        </div>
      </div>
      <div className="box-info2-doador">
        <div className="box-status_doacoes">
          <select
            name="statu_cadDoacoes"
            id="statu_cadDoacoes"
            className="inp_status"
          >
            <option value="status">{item.status}</option>
            <option value="em_analise">Em analise</option>
            <option value="finalizado">Finalizado</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </div>
        <div className="box-data_doacoes">
          <p className="data-doador">Quantidade: {item.quantidade}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Header />
      <div className="box-fullContent">
        <div className="box-content">
          {/* <!-- -----Parceiro-------------------------------------------------------------------------------------------------------------- --> */}
          <div className="box-doador_parceiro">
            <div className="box-img-nome-doador_parceiro">
              <div className="box-imagem-doador_parceiro">
                <img
                  className="img-doador_parceiro"
                  src="imagens/parceiros/banner06.jpg"
                  alt=""
                />
              </div>
              <div className="box-info1-doador_parceiro">
                <p className="nome-doador">Igreja Nossa Senhora de Fatima</p>
                <p className="sexo-doador">Cep: 06462-008</p>
              </div>
            </div>
            <div className="box-info2-doador_parceiro">
              <p className="data-doador">doador desde: 15/05/2024</p>
              <p className="endereco-doador">
                Endereço: Rua Castelo branco, 55 - Barueri / SP
              </p>
            </div>
          </div>
          {/* <!-- ------------------------------------------------------------------------------------------------------------------- --> */}
          <div className="flexHome-parceiro">
            <h1 className="title-doadores">Doações</h1>
          </div>
          {/* <!-- -----Search-------------------------------------------------------------------------------------------------------------- --> */}
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
                <img src="imagens/search.png" alt="imagem search" />
              </div>
            </div>
          </div>
          <div className="flexHome-main">
            <main className="box-main">
              {/* <!-- ------Caixa de doador------------------------------------------------------------------------------------------------------------- --> */}
              {listar}
              {/* <div className="box-doador">
                <div className="box-img-nome-doador">
                  <div className="box-imagem-doador">
                    <img
                      className="img-doador"
                      src="imagens/doacoes/calça masculina.jpg"
                      alt=""
                    />
                  </div>
                  <div className="box-info1-doador">
                    <p className="nome-doador">Calça jeans</p>
                    <p className="sexo-doador">Tamanho: 38</p>
                  </div>
                </div>
                <div className="box-info2-doador">
                  <div className="box-status_doacoes">
                    <select
                      name="statu_cadDoacoes"
                      id="statu_cadDoacoes"
                      className="inp_status"
                    >
                      <option value="status">Status</option>
                      <option value="em_analise">Em analise</option>
                      <option value="finalizado">Finalizado</option>
                      <option value="cancelado">Cancelado</option>
                    </select>
                  </div>
                  <div className="box-data_doacoes">
                    <p className="data-doador">Quantidade: 15</p>
                  </div>
                </div>
              </div> */}
              {/* <!-- ------Caixa de doador------------------------------------------------------------------------------------------------------------- --> */}
              {/* <div class="box-doador">
                <div class="box-img-nome-doador">
                  <div id="box-imagem-doador">
                    <img
                      id="img-doador"
                      src="imagens/doacoes/camisa masculina.jpg"
                      alt=""
                    />
                  </div>
                  <div id="box-info1-doador">
                    <p id="nome-doador">Camiseta masculino</p>
                    <p id="sexo-doador">Tamanho: M</p>
                  </div>
                </div>
                <div id="box-info2-doador">
                  <div class="box-status_doacoes">
                    <select
                      name="statu_cadDoacoes"
                      id="statu_cadDoacoes"
                      class="inp_status"
                    >
                      <option value="status">Status</option>
                      <option value="em_analise">Em analise</option>
                      <option value="finalizado">Finalizado</option>
                      <option value="cancelado">Cancelado</option>
                    </select>
                  </div>
                  <div class="box-data_doacoes">
                    <p id="data-doador">Quantidade: 15</p>
                  </div>
                </div>
              </div> */}
              {/* <!-- ------Caixa de doador------------------------------------------------------------------------------------------------------------- --> */}
              {/* <div class="box-doador">
                <div class="box-img-nome-doador">
                  <div id="box-imagem-doador">
                    <img
                      id="img-doador"
                      src="imagens/doacoes/edredon solteiro.jpg"
                      alt=""
                    />
                  </div>
                  <div id="box-info1-doador">
                    <p id="nome-doador">Edredom</p>
                    <p id="sexo-doador">Tamanho: Solteiro</p>
                  </div>
                </div>
                <div id="box-info2-doador">
                  <div class="box-status_doacoes">
                    <select
                      name="statu_cadDoacoes"
                      id="statu_cadDoacoes"
                      class="inp_status"
                    >
                      <option value="status">Status</option>
                      <option value="em_analise">Em analise</option>
                      <option value="finalizado">Finalizado</option>
                      <option value="cancelado">Cancelado</option>
                    </select>
                  </div>
                  <div class="box-end_doador_parceiro">
                    <div class="box-data_doacoes">
                      <p id="data-doador">Quantidade: 15</p>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <!-- ------Caixa de doador------------------------------------------------------------------------------------------------------------- --> */}
              {/* <div class="box-doador">
                <div class="box-img-nome-doador">
                  <div id="box-imagem-doador">
                    <img
                      id="img-doador"
                      src="imagens/doacoes/edredon.jpg"
                      alt=""
                    />
                  </div>
                  <div id="box-info1-doador">
                    <p id="nome-doador">Edredom</p>
                    <p id="sexo-doador">Tamanho: Casal</p>
                  </div>
                </div>
                <div id="box-info2-doador">
                  <div class="box-status_doacoes">
                    <select
                      name="statu_cadDoacoes"
                      id="statu_cadDoacoes"
                      class="inp_status"
                    >
                      <option value="status">Status</option>
                      <option value="em_analise">Em analise</option>
                      <option value="finalizado">Finalizado</option>
                      <option value="cancelado">Cancelado</option>
                    </select>
                  </div>
                  <div class="box-end_doador_parceiro">
                    <div class="box-data_doacoes">
                      <p id="data-doador">Quantidade: 15</p>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <!-- ------Caixa de doador------------------------------------------------------------------------------------------------------------- --> */}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectInstituicao;
