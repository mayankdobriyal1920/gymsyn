import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import {NavigationBar} from "@mauricewegner/capacitor-navigation-bar";
import {StatusBar, Style} from "@capacitor/status-bar";
import {Capacitor} from "@capacitor/core";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import {IonReactRouter} from "@ionic/react-router";
import {IonRouterOutlet} from "@ionic/react";
export default function PublicRoutes(){
    useEffect(()=>{
        if(Capacitor.isNativePlatform()){
            NavigationBar.setColor({ color: '#000000' , darkButtons:false});
            StatusBar.setBackgroundColor({ color: '#000000' });
            StatusBar.setStyle({ style:Style.Dark });
        }
    },[])
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Switch>
                    <Route exact path={"/welcome"} component={WelcomePage}/>
                    <Route exact path={"/login"} component={LoginPage}/>
                    <Route exact path={"/signup"} component={SignupPage}/>
                    <Redirect from="/" to="/welcome" />
                    <Route render={()=><Redirect to={"/welcome"}/>}/>
                </Switch>
            </IonRouterOutlet>
        </IonReactRouter>
    )
}