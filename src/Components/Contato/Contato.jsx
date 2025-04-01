import imgTelefone from "../../Images/contato/Telefone.png";
import imgEmail from "../../Images/contato/email.png";
import imgWhatsapp from "../../Images/contato/whatsapp.webp";
import imgInstagram from "../../Images/contato/instagram.webp";
import imgYoutube from "../../Images/contato/play.png";
import Header from "../Header/Header";
import "../Contato/Contato.css";

const Contato = () => {
  const list = [
    {
      id: 1,
      img: imgTelefone,
      descricao: "Telefone",
      contato: "(99) 99999-9999",
    },
    {
      id: 2,
      img: imgEmail,
      descricao: "E-Mail",
      contato: "geraacao@gmail.com",
    },
    {
      id: 3,
      img: imgWhatsapp,
      descricao: "WhatsApp",
      contato: "(99) 99999-9999",
    },
    {
      id: 4,
      img: imgInstagram,
      descricao: "Instagram",
      contato: "@GeraAcao",
    },
    {
      id: 5,
      img: imgYoutube,
      descricao: "YouTube",
      contato: "youtube.com.br",
    },
  ];
  const contactList = list.map((item) => (
    <div key={item.id} className="select-contatos">
      <img className="img-contato" src={item.img} />
      <p className="desc-contato">{item.descricao}</p>
      <p className="desc-contato">{item.contato}</p>
    </div>
  ));

  return (
    <>
      <Header />
      <main>
        <h1 className="titulo-contato">Como Prefere Falar Conosco</h1>
        <div className="contato">
          <div className="sub-contato">
            {/* <!-- -----Caixa de contato------------------------------------------------------------------------------------------------------------- -->   */}
            {contactList}
            {/* <!-- -----Caixa de contato------------------------------------------------------------------------------------------------------------- -->
            <div id="select-contatos">
                <img src={ }alt="E-Mail">
                <p class="desc-contato">E-Mail</p>
                <p class="desc-contato">email@gmail.com</p>
            </div>
<!-- -----Caixa de contato------------------------------------------------------------------------------------------------------------- -->  
            <div id="select-contatos">
                <img src={} alt="whatsapp">
                <p class="desc-contato">WhatsApp</p>
                <p class="desc-contato">(99) 99999-9999</p>
            </div>
<!-- -----Caixa de contato------------------------------------------------------------------------------------------------------------- -->  
            <div id="select-contatos">
                <img src={} alt="instagram">
                <p class="desc-contato">Instagram</p>
                <p class="desc-contato">@instagram.com</p>
            </div>
<!-- -----Caixa de contato------------------------------------------------------------------------------------------------------------- -->  
            <div id="select-contatos">
                <img src={} alt="play">
                <p class="desc-contato">YouTube</p>
                <p class="desc-contato">youtube.com.br</p>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Contato;
