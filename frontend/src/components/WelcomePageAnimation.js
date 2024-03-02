// WelcomePageAnimation.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import welcomeScreen1 from "../theme/images/welcome-screen-1.gif";
import welcomeScreen2 from "../theme/images/welcome-screen-2.png";
import welcomeScreen3 from "../theme/images/welcome-screen-3.png";
import welcomeScreen5 from "../theme/images/welcome-screen-5.jpg";
import welcomeScreen6 from "../theme/images/welcome-screen-6.jpg";

const WelcomePageAnimation = () => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="welcome_page_swiper_slider">
            <SwiperSlide>
                <div className={"welcome_page_slider_inner"}>
                    <div className={"main_welcome_header_logo_section first"}>
                        <img src={welcomeScreen1} alt={"logo"}/>
                    </div>
                    <div className={"welcome_slogan_container"}>
                        Sync your fitness <br></br>
                        Journey with GymSyn
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"welcome_page_slider_inner"}>
                    <div className={"main_welcome_header_logo_section"}>
                        <img src={welcomeScreen2} alt={"logo"}/>
                    </div>
                    <div className={"welcome_slogan_container"}>
                        Your Ultimate Gym <br></br>
                        Companion GymSyn!
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"welcome_page_slider_inner"}>
                    <div className={"main_welcome_header_logo_section"}>
                        <img src={welcomeScreen3} alt={"logo"}/>
                    </div>
                    <div className={"welcome_slogan_container"}>
                        Empowering Your Workouts, <br></br>
                        One Sync at a Time!
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"welcome_page_slider_inner"}>
                    <div className={"main_welcome_header_logo_section"}>
                        <img src={welcomeScreen5} alt={"logo"}/>
                    </div>
                    <div className={"welcome_slogan_container"}>
                        Elevate Your Fitness <br></br>
                        Experience with GymSyn!
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"welcome_page_slider_inner"}>
                    <div className={"main_welcome_header_logo_section"}>
                        <img src={welcomeScreen6} alt={"logo"}/>
                    </div>
                    <div className={"welcome_slogan_container"}>
                        Your Fitness Ally  <br></br>
                        Every Step of the Way!
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default WelcomePageAnimation;
