import Header from "../Header/Header";
import "../CadastroInstituicao/CadastroInstituicao.css";

const CadastroInstituicao = () => {
  return (
    <>
      <Header />
      <main>
        <div className="box-content">
          <h1 className="titulo-cadParceiro">Cadastro de Parceiros</h1>
          {/* <!-- -----Caixa de cadastro------------------------------------------------------------------------------------------------------------- -->   */}
          <fieldset className="field_cadParceiro">
            <legend className="legend">Cadastro</legend>
            <div className="box1-cadParceiro">
              <div className="box-cnpj_nome_cadParceiro">
                <div className="box-cnpj_cadParceiro">
                  <p className="p-label">CNPJ:</p>
                  <input
                    type="text"
                    name="cnpj_cadParceiro"
                    id="cnpj_cadParceiro"
                    className="inp_cnpj"
                    placeholder=" 00.000.000/0000-00"
                  />
                </div>
                <div className="nome_cadParceiro">
                  <p className="p-label">Nome da Instituição:</p>
                  <input
                    type="text"
                    name="nome_cadParceiro"
                    id="nome_cadParceiro"
                    className="inp_nome"
                  />
                </div>
              </div>
              <div class="box-img_cadParceiro">
                <p class="p-label">Imagem:</p>
                <div className="img_into_cadParceiro">
                  <p className="p-label">Add imagem</p>
                </div>
              </div>
            </div>
            {/* <!-- -----Caixa de endereço------------------------------------------------------------------------------------------------------------- -->   */}
            <fieldset>
              <legend className="legend">Endereço</legend>
              {/* <!-- -----Sub Caixa de cadastro------------------------------------------------------------------------------------------------------------- -->   */}
              <div className="box-cep_tipo_cadParceiro">
                <div className="cep_cadParceiro">
                  <p className="p-label">Cep:</p>
                  <input
                    type="text"
                    name="cep_cadParceiro"
                    id="cep_cadParceiro"
                    className="inp_cep"
                    placeholder="00000-000"
                  />
                </div>
                <div className="tipo_cadParceiro">
                  <p className="p-label">Tipo logradouro:</p>
                  <select
                    name="tipoLogradouro_cadParceiro"
                    id="tipoLogradouro_cadParceiro"
                    className="inp_tipoLogradouro"
                  >
                    <option value="rua">Rua</option>
                    <option value="avenida">Avenida</option>
                    <option value="rodovia">Rodovia</option>
                    <option value="estrada">Estrada</option>
                    <option value="viela">Viela</option>
                    <option value="alameda">Alameda</option>
                    <option value="quadra">Quadra</option>
                  </select>
                </div>
              </div>
              {/* <!-- -----Sub Caixa de cadastro------------------------------------------------------------------------------------------------------------- -->   */}
              <div className="box-logradouro_numero_cadParceiro">
                <div className="logradouro_cadParceiro">
                  <p className="p-label">Logradouro:</p>
                  <input
                    type="text"
                    name="logradouro_cadParceiro"
                    id="logradouro_cadParceiro"
                    className="inp_logradouro"
                  />
                </div>
                <div className="numero_cadParceiro">
                  <p className="p-label">Numero:</p>
                  <input
                    type="text"
                    name="numero_cadParceiro"
                    id="numero_cadParceiro"
                    className="inp_numero"
                    placeholder="Ex: 461"
                  />
                </div>
              </div>
              {/* <!-- -----Sub Caixa de cadastro------------------------------------------------------------------------------------------------------------- -->   */}
              <div className="box-bairro_cidade_uf_cadParceiro">
                <div className="bairro_cadParceiro">
                  <p className="p-label">Bairro:</p>
                  <input
                    type="text"
                    name="bairro_cadParceiro"
                    id="bairro_cadParceiro"
                    className="inp_bairro"
                    placeholder="Ex: Pq Imperial"
                  />
                </div>
                <div className="cidade_cadParceiro">
                  <p className="p-label">Cidade:</p>
                  <input
                    type="text"
                    name="cidade_cadParceiro"
                    id="cidade_cadParceiro"
                    className="inp_cidade"
                    placeholder="Ex Barueri"
                  />
                </div>
                <div className="uf_cadParceiro">
                  <p className="p-label">UF:</p>
                  <input
                    type="text"
                    name="uf_cadParceiro"
                    id="uf_cadParceiro"
                    className="inp_uf"
                    placeholder="Ex: SP"
                  />
                </div>
              </div>
            </fieldset>
            {/* <!-- -----Sub Caixa de cadastro------------------------------------------------------------------------------------------------------------- -->   */}
            <div className="box2-cadParceiro">
              <div className="email_cadParceiro">
                <p className="p-label">E-Mail</p>
                <input
                  type="email"
                  name="email_cadParceiro"
                  id="email_cadParceiro"
                  className="inp_email"
                  placeholder="google@gmail.com"
                />
              </div>
              <div className="celular_cadParceiro">
                <p>Celular:</p>
                <input
                  type="text"
                  name="celular_cadParceiro"
                  id="celular_cadParceiro"
                  className="inp_celular"
                  placeholder="(99) 99999-9999"
                />
              </div>
            </div>
            {/* <!-- -----Sub Caixa de cadastro------------------------------------------------------------------------------------------------------------- -->   */}
            <div className="box3-cadParceiro">
              <div className="data_cadParceiro">
                <p className="p-label">Data de cadastro:</p>
                <input
                  type="date"
                  name="data_cadDoacoes"
                  id="data_cadDoacoes"
                  className="inp_data"
                />
              </div>
              {/* <!-- -----Botão salvar------------------------------------------------------------------------------------------------------------- -->   */}
              <div>
                <input
                  type="submit"
                  name="btn_enviar"
                  id="btn_enviar"
                  className="btn_cadDoacoes"
                  value="Enviar"
                />
              </div>
              {/* <!-- -----Botão excluir------------------------------------------------------------------------------------------------------------- -->   */}
              <div>
                <input
                  type="submit"
                  name="btn_exclir"
                  id="btn_excluir"
                  className="btn_cadDoacoes"
                  value="Excluir"
                />
              </div>
            </div>
          </fieldset>
        </div>
      </main>
    </>
  );
};
export default CadastroInstituicao;
