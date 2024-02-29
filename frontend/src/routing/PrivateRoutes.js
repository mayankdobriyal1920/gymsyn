import React, {useEffect} from 'react';
import {Redirect, Route} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {getWebsocketConnectedMessage} from "../actions/helpers/WebSocketHelper";
// import {w3cwebsocket as W3CWebSocket} from "websocket";
import WelcomePage from "../pages/WelcomePage";
import {Capacitor} from "@capacitor/core";
import {NavigationBar} from "@mauricewegner/capacitor-navigation-bar";
import {StatusBar, Style} from "@capacitor/status-bar";

// let loadOnce = false;
export default function PrivateRoutes(){

    useEffect(()=>{
        if(Capacitor.isNativePlatform()){
            NavigationBar.setColor({ color: '#000000' , darkButtons:false});
            StatusBar.setBackgroundColor({ color: '#000000' });
            StatusBar.setStyle({ style:Style.Dark });
        }
    },[])

    // const dispatch = useDispatch();
    // React.useEffect(()=>{
    //     if(!loadOnce){
    //         getWebsocketConnectedMessage(W3CWebSocket,dispatch)
    //         loadOnce = true;
    //     }
    // },[])
    return (
        <React.Fragment>
            <Route exact path={"/welcome"} component={WelcomePage}/>
            <Route exact path={"/login"} component={WelcomePage}/>
            <Route exact path={"/signup"} component={WelcomePage}/>
            <Route path={"*"} render={()=><Redirect to={"/welcome"}/>}/>
        </React.Fragment>
    )
}