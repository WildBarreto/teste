import capcha from "../../assets/capcha.png";
import lock from "../../assets/lock.png";
import plus from "../../assets/plus.png";
import user from "../../assets/search.png";

import "./styles.css";

export function Form() {
  return (
    <div>
      <form action="">
        <label htmlFor="">
          Usuario
          <div>
            <img src={user} alt="" />
            <input type="text" placeholder="aluno290_1u" />
          </div>
        </label>
        <label htmlFor="">
          Senha
          <div>
            <img src={lock} alt="" />
            <input type="password" placeholder="*******" />
          </div>
        </label>

        <label htmlFor="" className="check">
          <input type="checkbox" className="check" />
          Manter conectado
        </label>

        <div className="capcha">
          <input type="checkbox" className="check" />
          <span> I am human</span>

          <div>
            <img src={capcha} alt="" />
            <span>Privacy - Terms</span>
          </div>
        </div>

        <button className="enter">
          <img src={plus} alt="" /> Entrar
        </button>
      </form>
    </div>
  );
}
