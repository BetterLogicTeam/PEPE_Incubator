import React from "react";
import "./Footer.css";
import pepe_incubators from "../../assets/pepe_incubators.png";
import telegram from "../../assets/telegram.png";
import twiter from "../../assets/twiter.png";
import Pepe from "../../assets/Pepe.png";
import Incubator_t from "../../assets/Incubator_t.png";

function Footer() {
  return (
    <div>
      <div className="Footer_main_div">
        <div className="footer_img_main_div">
          <div className="footer_img_scnd_div">
            <img className="pepe_incubator_img" src={pepe_incubators} alt="" />
          </div>
          <div className="Hero_scnd_para ps-3 pt-5 d-flex">
            {/* <span className="green_text">Pepe</span>
            <span className="text-white">Incubator</span> */}
            <img src={Pepe} className="pepe_footer" alt="" />
            <img className="w-75 ps-2 Incubator_footer" src={Incubator_t} alt="" />
          </div>
        </div>
        <div className="footer_para">
          <p>
            <span className="gren">Pepe</span>{" "}
            <span className="text-white">
              {" "}
              Incubator | Copyright © 2023 | All Rights Reserved
            </span>
          </p>
        </div>

        <div className="footer_logo">
          <a href="https://t.me/pepeincubator" target="_blank"><img className="pe-3" src={telegram} alt="" /></a>
          <a href="https://twitter.com/pepeincubator" target="_blank"><img src={twiter} alt="" /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
