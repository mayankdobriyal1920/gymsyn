import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {getWebsocketConnectedMessage} from "../actions/helpers/WebSocketHelper";
// import {w3cwebsocket as W3CWebSocket} from "websocket";
import {Capacitor} from "@capacitor/core";
import {NavigationBar} from "@mauricewegner/capacitor-navigation-bar";
import {StatusBar, Style} from "@capacitor/status-bar";
import MainAppEntryComponent from "../components/MainAppEntryComponent";
import {IonReactRouter} from "@ionic/react-router";
import {IonRouterOutlet} from "@ionic/react";

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
        <IonReactRouter>
            <IonRouterOutlet>
                <Switch>
                    <Route path={"/dashboard"} component={MainAppEntryComponent}/>
                    <Redirect from="/" to="/dashboard" />
                    <Route render={()=><Redirect to={"/dashboard"}/>}/>
                </Switch>
            </IonRouterOutlet>
        </IonReactRouter>
    )
}