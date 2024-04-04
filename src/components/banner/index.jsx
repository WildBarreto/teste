import { useState } from "react";
import banner from "../../assets/Banner login.png";

import { Carousel } from "../carousel";
import "./styles.css";

export function Banner() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive); // Invertendo o estado ao clicar
  };

  return (
    <div className="banner">
      <img src={banner} alt="" />
      <div className="informs">
        <button>Cursos</button>
        <h1>Plataforma de cursos completa</h1>
        <p>
          Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida
          tincidunt, etiam magna sapien gravida sodales sed vel pulvinar
          suspendisse, morbi mi proin urna ornare posuere donec aptent. orci
          vivamus primis fusce lacinia libero nostra aliquam vestibulum
        </p>

        <div className="dashed">
          <div className={isActive ? "active" : ""} onClick={handleClick} />
          <div className={isActive ? "active" : ""} onClick={handleClick} />
          <div className={isActive ? "active" : ""} onClick={handleClick} />
        </div>
      </div>

      <Carousel />
    </div>
  );
}
