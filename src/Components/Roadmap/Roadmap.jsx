import React from "react";
import "./Roadmap.css";
import roadmap_res from "../../assets/roadmap_res.png"

function Roadmap() {
  return (
    <div id="Roadmap">
    <div className="roadmap_ka_flex">
      <div className="Roadmap_main_div">
        <h1 className="Roadmap_main_div_heading">Roadmap</h1>
        <div className="container">
          <div className="row roadmap_row">
            <div className="col-3">
              <div className="phase_box">
                <p className="text-white">
                  <li className="phase_box_li">
                    <ul className="phase_box_ul">
                      -Research and phase 1 development
                    </ul>
                    <ul className="phase_box_ul">-DAPP development</ul>
                    <ul className="phase_box_ul">-Smart Contract preparation</ul>
                    <ul className="phase_box_ul">
                      -Marketing and whitelist distribution
                    </ul>
                  </li>
                </p>
              </div>
            <hr className="roadmap_hr"/>
              <div className="circle1">
                <div className="circle2">
                  {/* <hr className="roadmap_hr" style={{ height: "6px" }} /> */}
                  <div className="circle3">
                    <p>Phase 1</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3 neechval ">
            
              <div className="circle1">
                <div className="circle2">
                  {/* <hr className="roadmap_hr" style={{ height: "6px" }} /> */}
                  <div className="circle3">
                    <p>Phase 2</p>
                  </div>
                </div>
              </div>

              <div className="phase_box_two">
                <p className="text-white">
                  <li className="phase_box_li">
                    <ul className="phase_box_ul">
                      -Dashboard development
                    </ul>
                    <ul className="phase_box_ul">-Partnership with Binance listed project</ul>
                    <ul className="phase_box_ul">-Pre presale marketing</ul>
                    <ul className="phase_box_ul">
                      -Whitelist distribution
                    </ul>
                    <ul className="phase_box_ul">
                      -Presale start on Pinksale
                    </ul>
                  </li>
                </p>
              </div>
              
            </div>

            <div className="col-3">
            <div className="phase_box scnd_last">
                <p className="text-white">
                  <li className="phase_box_li">
                    <ul className="phase_box_ul">
                      -Launch on DEX
                    </ul>
                    <ul className="phase_box_ul">-Post launch marketing</ul>
                    <ul className="phase_box_ul">-V2 development</ul>
                    <ul className="phase_box_ul">-Establishing partnerships</ul>
                    <ul className="phase_box_ul">
                      -Coinmarketcap Listing
                    </ul>
                    <ul className="phase_box_ul">
                      -Coingecko listing
                    </ul>
                  </li>
                </p>
              </div>
              <div className="circle1 scndlast_circle">
                <div className="circle2">
                  {/* <hr className="roadmap_hr" style={{ height: "6px" }} /> */}
                  <div className="circle3">
                    <p>Phase 3</p>
                  </div>
                </div>
              </div>
              
            </div>


            <div className="col-3 neechval">
            
              <div className="circle1 iska_float">
                <div className="circle2">
                  {/* <hr className="roadmap_hr" style={{ height: "6px" }} /> */}
                  <div className="circle3">
                    <p>Phase 4</p>
                  </div>
                </div>
              </div>

              <div className="phase_box_two">
                <p className="text-white">
                  <li className="phase_box_li">
                    <ul className="phase_box_ul">
                      -Incubating the first project and launch on Pepe Incubator launchpad
                    </ul>
                    <ul className="phase_box_ul">-Incubating 10 projects</ul>
                    <ul className="phase_box_ul">-Buyback $PEPEINC</ul>
                    <ul className="phase_box_ul">-New roadmap</ul>
                  </li>
                </p>
              </div>
              
            </div>

          </div>
          {/* <div className="roadmap_rseImg mt-5">
            <img className="w-100" src={roadmap_res} alt="" />
            </div> */}
        </div>
      </div>






  

<ul className="timeline">

	<li>
		<div className="direction-r">
			<div className="flag-wrapper">
            <div className="circle1 time-wrapper">
                <div className="circle2">
                  <div className="circle3">
                    <p>Phase 1</p>
                  </div>
                </div>
              </div>
			</div>
      <div className="phase_box">
                <p className="text-white">
                  <li className="phase_box_li">
                    <ul className="phase_box_ul">
                      -Research and phase 1 development
                    </ul>
                    <ul className="phase_box_ul">-DAPP development</ul>
                    <ul className="phase_box_ul">-Smart Contract preparation</ul>
                    <ul className="phase_box_ul">
                      -Marketing and whitelist distribution
                    </ul>
                  </li>
                </p>
              </div>
		</div>
	</li>
  
	<li>
		<div className="direction-l">
			<div className="flag-wrapper">
            <div className="circle1 time-wrapper">
                <div className="circle2">
                  <div className="circle3">
                    <p>Phase 2</p>
                  </div>
                </div>
              </div>
			</div>
			<div className="phase_box">
                <p className="text-white">
                  <li className="phase_box_li">
                  <ul className="phase_box_ul">
                      -Dashboard development
                    </ul>
                    <ul className="phase_box_ul">-Partnership with Binance listed project</ul>
                    <ul className="phase_box_ul">-Pre presale marketing</ul>
                    <ul className="phase_box_ul">
                      -Whitelist distribution
                    </ul>
                    <ul className="phase_box_ul">
                      -Presale start on Pinksale
                    </ul>
                  </li>
                </p>
              </div>
		</div>
	</li>

	<li>
    <div className="direction-r">
			<div className="flag-wrapper">
            <div className="circle1 time-wrapper">
                <div className="circle2">
                  <div className="circle3">
                    <p>Phase 3</p>
                  </div>
                </div>
              </div>
			</div>
            <div className="phase_box">
                <p className="text-white">
                  <li className="phase_box_li">
                  <ul className="phase_box_ul">
                      -Launch on DEX
                    </ul>
                    <ul className="phase_box_ul">-Post launch marketing</ul>
                    <ul className="phase_box_ul">-V2 development</ul>
                    <ul className="phase_box_ul">-Establishing partnerships</ul>
                    <ul className="phase_box_ul">
                      -Coinmarketcap Listing
                    </ul>
                    <ul className="phase_box_ul">
                      -Coingecko listing
                    </ul>
                  </li>
                </p>
              </div>
		</div>
	</li>

    <li>
		<div className="direction-l">
			<div className="flag-wrapper">
            <div className="circle1 time-wrapper">
                <div className="circle2">
                  <div className="circle3">
                    <p>Phase 4</p>
                  </div>
                </div>
              </div>
			</div>
			<div className="phase_box">
                <p className="text-white">
                  <li className="phase_box_li">
                  <ul className="phase_box_ul">
                      -Incubating the first project and launch on Pepe Incubator launchpad
                    </ul>
                    <ul className="phase_box_ul">-Incubating 10 projects</ul>
                    <ul className="phase_box_ul">-Buyback $PEPEINC</ul>
                    <ul className="phase_box_ul">-New roadmap</ul>
                  </li>
                </p>
              </div>
		</div>
	</li>
  
</ul>

    </div>
    </div>
  );
}

export default Roadmap;
