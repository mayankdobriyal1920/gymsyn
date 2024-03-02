import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import AddNewGymComponent from "./AddNewGymComponent";
import {IonPage} from "@ionic/react";
import GymOwnerUserDashboard from "./GymOwnerUserDashboard";

// let loadOnce = false;
export default function MainAppEntryComponent(){
    const {userInfo} = useSelector((state)=>state.userSignIn);
    return (
        <React.Fragment>
            {(userInfo?.is_owner) ?
                (userInfo?.gym_data) ?
                    <Switch>
                        <Route exact path={`/dashboard/home`} component={GymOwnerUserDashboard}/>
                        <Redirect exact from="/dashboard" to="/dashboard/home" />
                        <Route render={()=><Redirect to={"/dashboard/home"}/>}/>
                    </Switch>
                    :
                    <Switch>
                        <Route exact path={`/dashboard/add-new-gym-detail`} component={AddNewGymComponent}/>
                        <Redirect exact from="/dashboard" to="/dashboard/add-new-gym-detail" />
                        <Route render={()=><Redirect to={"/dashboard/add-new-gym-detail"}/>}/>
                    </Switch>
               :''
            }
        </React.Fragment>
    )
}