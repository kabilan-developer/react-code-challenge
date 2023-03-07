import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { Images } from "../../helpers";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__addr">
        <NavLink to="/" className="logo">
          <img
            src={Images.spacex_logo}
            alt="SpaceX"
            className="img-contain"
            width={200}
            height={50}
          />
        </NavLink>
        <h2>Contact</h2>
        <address>
          Hawthorne, California. United States
          <br />
          <a class="footer__btn" href="mailto:example@gmail.com">
            Email Us
          </a>
        </address>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">Media</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Online</a>
            </li>
            <li>
              <a href="#">Print</a>
            </li>
            <li>
              <a href="#">Alternative Ads</a>
            </li>
          </ul>
        </li>

        <li class="nav__item nav__item--extra">
          <h2 class="nav__title">Social Platforms</h2>

          <ul class="nav__ul  nav__ul--extra">
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Flickr</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Suppliers</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">Legal</h2>
          <ul class="nav__ul">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="center">
        <span className="text-gray">
          &copy; 2023 Something. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
