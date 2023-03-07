import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header";
import "./style.css";
import UpcomingSection from "./UpcomingSection";

const video = require("../../assets/videos/backplay.mp4");

const HomePage = () => {
  const location = useLocation();
  function scrollFunction() {
    const offset = document.documentElement.scrollTop;
    if (offset < 600) {
      document
        .getElementById("onscrolling")
        ?.style.setProperty(
          "transform",
          "scale(" + (100 - offset / 15) / 100 + ")"
        );
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <>
    <div id="onscrolling">
      <div className="video-container">
        {location.pathname === "/" && <Header />}
        <video
          loop={true}
          muted={true}
          autoPlay={true}
          controls={false}
          playsInline={true}
          disablePictureInPicture={true}
          id="myVideo"
        >
          <source src={video} type="video/mp4" />
          <track
            default
            kind="captions"
            srcLang="en"
            src="/media/examples/friday.vtt"
          />
        </video>
        <div className="home_info">
          <h1>Space Exploration Technologies</h1>
          <p>
          SpaceX is the first private company to send a spacecraft to the International Space Station, the first to achieve vertical propulsive landing of an orbital rocket booster, the first to reuse such a booster, and the first private company to send astronauts to orbit and to the International Space Station
          </p>
          <div className="outline-btn">
            <a href="#">
              <small>EXPLORE</small>
            </a>
          </div>
        </div>
      </div>
    </div>
    <UpcomingSection/>
    </>
  );
};

export default HomePage;
