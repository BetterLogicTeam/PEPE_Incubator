import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Pepe from "../../assets/Pepe.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper";
import landing_logo from "../../assets/landing_logo.png";
import Incubator_t from "../../assets/Incubator_t.png"

function Hero() {
  return (
    <div>
      <div className="hero_main">
        <div className="container">
          <div className="row hero_frst_clm">
            <div className="col-md-8">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
                <SwiperSlide>
                  <div>
                  <h1 className="Hero_main_text">
                      <span className="text-white">The first </span>
                      <span className="green_text">Meme projects</span> <br />
                      <span className="text-white">incubator</span>
                    </h1>
                    <p className="hero_para">
                      Not only helping in funding but we are also a <br />
                      launchpad
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                  <h1 className="Hero_main_text">
                      <span className="text-white">A </span>
                      <span className="green_text">launchpad that designed</span> <br />
                      <span className="text-white">
                         for innovation
                      </span>
                    </h1>
                    
                    <p className="hero_para">
                      We raise funds for those who don’t have enough <br />
                      capital
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <h1 className="Hero_main_text">
                      <span className="text-white">Raised </span>
                      <span className="green_text">funds</span> 
                      <span className="text-white"> are </span>
                      <span className="green_text">safe </span> 
                      <span className="text-white">in </span> <br />
                      <span className="text-white">trusted </span>
                      <span className="green_text">escrow </span> 
                    </h1>
                    <p className="hero_para">
                    All funds will be escrowed with a reputable and <br />
                    well-known third party.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="hero_main_bttn">
                <a href="http://app.pepeincubator.org/" target="_blank"><div className="green_bttn">
                Launch App
                </div></a>

                <a href="https://pepe-incubator-docs.gitbook.io/whitepaperv1/" target="_blank"><div className="light_green_bttn">
                Whitepaper
                </div></a>
              </div>
            </div>

            <div className="col-md-4 hero_ka_scnd">
            <div className="hero_k_scnd_ka_flex">
                <img className="lnnchsuju" src={landing_logo}></img>
                <div className="Hero_scnd_para text-center d-flex" style={{fontFamily: "Comic Sans MS", fontStyle: "normal"}}>
                    {/* <span className="green_text" style={{fontFamily: "Comic Sans MS", fontStyle: "normal"}}>Pepe</span> */}
                    <img src={Pepe} alt="" />
                    <img className="w-100 ps-2 Incubator_t" src={Incubator_t} alt="" />
                    {/* <span className="text-white" style={{fontFamily: "Comic Sans MS", fontStyle: "normal"}}>Incubator</span> */}
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
