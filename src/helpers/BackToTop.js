import React, { useState} from "react";
// import {IoIosArrowDropupCircle} from "react-icons/io";
import "./BackToTop.css";
import {Images} from "../helpers"

function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 250) {
      setVisible(true);
    } else if (scrolled <= 250) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div style={{ display: visible ? "inline" : "none" }} className="backToTop">
      <button onClick={scrollToTop} aria-label="Back to top">
        <img src={Images.up_arrow} className="contain up_arrow" alt="up"/>
      </button>
    </div>
  );
}

export default BackToTop;
