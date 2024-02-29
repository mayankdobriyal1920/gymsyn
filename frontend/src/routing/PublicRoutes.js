import React, {useEffect} from 'react';
import {Redirect, Route} from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import {NavigationBar} from "@mauricewegner/capacitor-navigation-bar";
import {StatusBar, Style} from "@capacitor/status-bar";
import {Capacitor} from "@capacitor/core";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
export default function PublicRoutes(){
    useEffect(()=>{
        if(Capacitor.isNativePlatform()){
            NavigationBar.setColor({ color: '#1b3248' , darkButtons:false});
            StatusBar.setBackgroundColor({ color: '#1b3248' });
            StatusBar.setStyle({ style:Style.Dark });
        }
    },[])
    return (
        <React.Fragment>
            <Route exact path={"/welcome"} component={WelcomePage}/>
            <Route exact path={"/login"} component={LoginPage}/>
            <Route exact path={"/signup"} component={SignupPage}/>
            <Route path={"*"} render={()=><Redirect to={"/welcome"}/>}/>
        </React.Fragment>
    )
}