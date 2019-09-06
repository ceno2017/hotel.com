import React, { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaDev,
  FaPhoneSquare,
  FaMapMarker,
  FaMailBulk
} from "react-icons/fa";
import logo from "../images/logo.png";
import Anchor from "./Anchor";

function MyFooterElement() {
  const myState = {
    socials: [
      [<FaFacebook />, "facebook.com"],
      [<FaLinkedin />, "linkedIn.com"],
      [<FaInstagram />, "instagram.com"],
      [<FaDev />, "getcbt.com.ng"],
      [<FaPhoneSquare />, ""],
      [<FaMapMarker />, ""]
    ]
  };

  const [state, setState] = useState(myState);

  const { socials } = state;
  const FaDev = socials.filter(item => item.url === "getcbt.com.ng");
  const phone = socials.find((item, index) => index === 4);
  const MapMarker = socials.find((item, index) => index === 5);

  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src={logo} alt="log" />

        <h3>
          About<span>WEBPLAN</span>
        </h3>

        <p className="footer-links">
          <a href={FaDev.url}>React training</a>|
          <a href={FaDev.url}>PHP Training</a>|<a href={FaDev.url}>SEO</a>|
          <a href={FaDev.url}>Contact</a>
        </p>

        <p className="footer-company-name">© 2019 WEBPLAN Ltd.</p>
      </div>

      <div className="footer-center">
        <div>
          <span>{MapMarker.icon}</span>
          <p>
            <span>60 - Estate Road, Woji,</span>
            Port Harcourt, Rivers State, Nigeria
          </p>
        </div>

        <div>
          <span>{phone.icon}</span>
          <p>+234(0)7012585759</p>
        </div>
        <div>
          <i className={<FaMailBulk />} />
          <p>
            <a href="mailto:support@eduonix.com">webplan.biz@yahoo.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          We offer training and skill building courses across Technology,
          Design, Management, Science and Humanities.
        </p>
        <div className="footer-icons">
          {socials.map((item, index) => {
            return (
              <Anchor key={index}>
                <span>{}</span>
              </Anchor>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default MyFooterElement;
