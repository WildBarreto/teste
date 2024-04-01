import banner from "../../assets/Banner login.png";

import { Carousel } from "../carousel";
import "./styles.css";

export function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="" />
      <Carousel />
    </div>
  );
}
