import React from 'react';
import {IonContent} from "@ionic/react";
import logoWithText from "../theme/images/logo-icon-with-text-dark.png";
import logoSloganText from "../theme/images/logo-slogan-text.png";
import {useHistory} from "react-router-dom";

export default function WelcomePage(){
    const history = useHistory();
    const goToPage = (page) =>{
        history.replace(page);
    }
    return (
        <IonContent className={"with_theme_gradiant_background"}>
            {/*///////////// LOGO SLOGAN CONTAINER /////////////////////*/}
            <div className={"main_logo_and_slogan_container_header"}>
                <div className={"main_welcome_header_logo_section"}>
                    <img src={logoWithText} alt={"logo"}/>
                </div>
                <div className={"logo_slogan_container"}>
                    <img src={logoSloganText} alt={"logo-slogan"}/>
                </div>
            </div>
            {/*///////////// LOGO SLOGAN CONTAINER /////////////////////*/}
            <div className={"main_button_container_section"}>
                <p>New to GymSyn?</p>
                <button onClick={()=>goToPage('/signup')} className={"signup_button glossy-button"}>
                    SignUp
                </button>
                <p>Already have account?</p>
                <button onClick={()=>goToPage('/login')} className={"login_button glossy-button"}>
                    Login
                </button>
            </div>
            <div className={"all_rights_reserve_footer_text"}>
                <p>
                    All rights reserved. Text, graphics, and other content on the Gymsyn app
                    are protected by copyright and other intellectual property laws.
                    The content of this app may not be reproduced,
                    distributed, modified, or used in any way without the express written consent of Gymsyn.
                </p>
            </div>
        </IonContent>
    )
}