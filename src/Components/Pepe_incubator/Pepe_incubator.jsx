import React from "react";
import "./pepe_incubator.css";
import pepe_incubators from "../../assets/pepe_incubators.png";

function pepe_incubator() {
  return (
    <div id="About">
      <div className="container pepe_incubator_container">
        <div className="pepe_incubator_img_main_div">
          <div className="pepe_incubator_img_scnd_div">
            <img className="pepe_incubator_img" src={pepe_incubators} alt="" />
          </div>
        </div>
        <div className="pepe_incubator_main">
          <h1 className="pepe_incubator_main_text pt-5">
            <span className="text-white">WTH is </span>
            <span className="green_text">Pepe</span>
            <span className="text-white"> Incubator?</span>
          </h1>

          <p className="pepe_incubator_main_para">
            Pepe Incubator is a unique community project that provides support
            and funding for meme-based projects. Pepe Incubator has its native
            token $PEPEINC to suppert our decentralized ecosystem. As the first
            meme project incubator, we are dedicated to helping innovative
            projects succeed and thrive. Our community-driven approach ensures
            that we are always working towards the best interests of our
            members. Whether you're a seasoned meme creator or just starting
            out, Pepe Incubator is here to help you achieve your goals. Pepe
            Incubator DAPPs provide launchpad and token generator tools.
          </p>

          <p className="pepe_incubator_main_para">
            Pepe Incubator is committed to supporting meme-based projects by
            providing funding and investment opportunities. As part of our
            mission to help projects succeed, we take a small fee from the funds
            raised, which is then reinvested back into the community through the
            purchase of Pepe Incubator tokens ($PEPEINC). This ensures that our
            community members benefit from the success of the projects we
            support.
          </p>

          <div className="d-flex justify-center mt-4">
            <a href="http://t.me/xFrozenfrog" target="_blank">
              <div className="green_bttn">Incubate</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pepe_incubator;
