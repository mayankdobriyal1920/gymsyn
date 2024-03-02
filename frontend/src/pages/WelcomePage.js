import React from 'react';
import {IonContent, IonPage} from "@ionic/react";
import logoWithText from "../theme/images/logo-icon-with-text-dark-120.png";
import {useHistory} from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import WelcomePageAnimation from "../components/WelcomePageAnimation";

export default function WelcomePage(){
    const history = useHistory();
    const goToPage = (page) =>{
        history.replace(page);
    }
    return (
        <IonPage>
           <IonContent>
            <div className={"logo_section_welcome_top"}>
                <img src={logoWithText} alt={"logo"}/>
            </div>
            {/*///////////// LOGO SLOGAN CONTAINER /////////////////////*/}
            <div className={"welcome_main_container_outer"}>
                <div className={"welcome_main_container_inner"}>
                <div className={"main_logo_and_slogan_container_header"}>
                  <WelcomePageAnimation/>
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
        </IonPage>
    )
}