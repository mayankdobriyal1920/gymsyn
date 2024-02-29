import React from 'react';
import {IonContent} from "@ionic/react";
import logoWithText from "../theme/images/logo-icon-with-text-dark-120.png";
import welcomeScreen1 from "../theme/images/welcome-screen-1.jpg";
import welcomeScreen2 from "../theme/images/welcome-screen-2.jpg";
import welcomeScreen3 from "../theme/images/welcome-screen-3.jpg";
import welcomeScreen5 from "../theme/images/welcome-screen-5.jpg";
import welcomeScreen6 from "../theme/images/welcome-screen-6.jpg";
import {useHistory} from "react-router-dom";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

export default function WelcomePage(){
    const history = useHistory();
    const goToPage = (page) =>{
        history.replace(page);
    }
    return (
        <IonContent>
            <div className={"logo_section_welcome_top"}>
                <img src={logoWithText} alt={"logo"}/>
            </div>
            {/*///////////// LOGO SLOGAN CONTAINER /////////////////////*/}
            <div className={"welcome_main_container_outer"}>
                <div className={"welcome_main_container_inner"}>
                <div className={"main_logo_and_slogan_container_header"}>
                    <Swiper pagination={true} modules={[Pagination]} className="welcome_page_swiper_slider">
                        <SwiperSlide>
                            <div className={"welcome_page_slider_inner"}>
                                <div className={"main_welcome_header_logo_section"}>
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
                </div>
                {/*///////////// LOGO SLOGAN CONTAINER /////////////////////*/}
                <div className={"main_button_container_section"}>
                    <button onClick={()=>goToPage('/login')} className={"login_button glossy-button"}>
                        Login
                    </button>
                    <p>{`Don't have an account yet?`} <a onClick={()=>goToPage('/signup')}>SignUp</a></p>
                </div>
                <div className={"all_rights_reserve_footer_text"}>
                    <p>
                        Copyright 2024 GymSym. All Rights Reserved.
                    </p>
                </div>
            </div>
            </div>
        </IonContent>
    )
}