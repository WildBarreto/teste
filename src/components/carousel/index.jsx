import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import "./styles.css";

export function Carousel() {
  return (
    <div className="chevron">
      <button className="left">
        <FaChevronLeft />
      </button>
      <button className="right">
        <FaChevronRight />
      </button>
    </div>
  );
}
