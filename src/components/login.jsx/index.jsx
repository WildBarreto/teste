import logo from "../../assets/Logo.png";
import appleicon from "../../assets/appleicon.png";
import faceicon from "../../assets/faceicon.png";
import toolzzIcon from "../../assets/toolzicon.png";
import twittericon from "../../assets/twittericon.png";
import { Form } from "../form";
import "./styles.css";

export function Login() {
  return (
    <div className="container">
      <div className="head">
        <img src={logo} alt="" />
        <button>Criar conta</button>
      </div>

      <div className="typeLogin">
        <h1>Boas-vindas!</h1>
        <h2>Entre utilizando uma das opções abaixo</h2>
        <div className="buttonContainer">
          <button>
            <img src={toolzzIcon} alt="" />
          </button>
          <button>
            <img src={faceicon} alt="" />
          </button>
          <button>
            <img src={appleicon} alt="" />
          </button>
          <button>
            <img src={twittericon} alt="" />
          </button>
        </div>
      </div>

      <div className="or">
        <div />
        <span>OU</span>
        <div />
      </div>
      
      <Form />
    </div>
  );
}
