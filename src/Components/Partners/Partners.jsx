import React from "react";
import "./Partners.css";
import first from "../../assets/first.png";
import scnd from "../../assets/scnd.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";
import fifth from "../../assets/fifth.png";
import sixth from "../../assets/sixth.png";
import seventh from "../../assets/seventh.png";
import eight from "../../assets/eight.png";

function Partners() {
  return (
    <div>
      <div className="Partners_main">
        <h1 className="Partners_heading text-white">Partners</h1>
<div className="container_fllex_main">
        <div className="container_ke_width">
          <div
            className="container Partners_green_box "
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="row pb-3 scnd_row">
              <div className="col-lg-3">
                <img src={first}></img>
              </div>

              <div className="col-lg-3 container_fllex">
                <img src={scnd}></img>
              </div>

              <div className="col-lg-3 container_fllex">
                <img src={third}></img>
              </div>

              <div className="col-lg-3 container_fllex">
                <img src={fourth}></img>
              </div>
            </div>

            <div className="row scnd_row">
              <div className="col-lg-3 container_fllex">
                <img src={fifth}></img>
              </div>

              <div className="col-lg-3 container_fllex">
                <img src={sixth}></img>
              </div>

              <div className="col-lg-3 container_fllex">
                <img src={seventh}></img>
              </div>

              <div className="col-lg-3 container_fllex">
                <img src={eight}></img>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
