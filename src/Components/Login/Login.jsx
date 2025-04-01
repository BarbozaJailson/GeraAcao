import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";

function Login() {
  return (
    <>
      <Header />
      <section className="login-cadastro">
        <div className="login_e_cadastro">
          <fieldset className="box-login">
            <legend className="legend">Login</legend>
            <form action="" method="post" id="acao">
              <p>Login</p>
              <input
                type="text"
                className="inputBase"
                placeholder="Matricula..."
                required
              />
              <p>Senha</p>
              <input
                type="password"
                className="inputBase"
                placeholder="Senha..."
                required
              />
              <Link to={"/home"}>
                <input
                  className="button inputBase"
                  type="button"
                  value="Entrar"
                />
              </Link>
              <div className="box-cadastre">
                <p className="txtcadastro">não tem cadastro?</p>
                <a className="btncadastro" href={<Home />}>
                  cadastre-se
                </a>
              </div>
            </form>
          </fieldset>
        </div>
      </section>
    </>
  );
}

export default Login;
