import React from "react";
import footerStyle from "./Footer.module.css";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className={footerStyle.main}>
        <div className={footerStyle.footerContainer}>
          <div className={footerStyle.services}>
            <h3 className={footerStyle.heading}>Company</h3>
            <p>About</p>
            <p>Our Culture</p>
            <p>Partners</p>
          </div>
          <div className={footerStyle.cases}>
            <h3 className={footerStyle.heading}>Downloads</h3>
            <p>Cinemy Media Server</p>
            <p>Apps & Devices</p>
            <p>Where to Watch</p>
          </div>
          <div className={footerStyle.reviews}>
            <h3 className={footerStyle.heading}>Resources</h3>
            <p>Support</p>
            <p>Articles</p>
            <p>Forums</p>
          </div>
          <div className={footerStyle.contacts}>
            <h3 className={footerStyle.heading}>Contacts</h3>
            <p>
              <span>
                <GoLocation />
              </span>
              We are located on the web
            </p>
            <p>
              <span>
                <BsFillTelephoneFill />
              </span>
              +38 098 0709098
            </p>
            <p>
              <span>
                <AiTwotoneMail />
              </span>
              cinemy@gmail.com
            </p>
          </div>
        </div>
        <p className={footerStyle.Copyright}>Copyright © 2022</p>
      </footer>
    </>
  );
};

export default Footer;
