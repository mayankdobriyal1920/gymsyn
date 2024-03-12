import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import AddNewGymComponent from "../components/AddNewGymComponent";
import GymOwnerUserDashboard from "../components/GymOwnerUserDashboard";
import AddEditMemberModalComponent from "../components/AddEditMemberModalComponent";
import MemberPage from "../pages/MemberPage";
import MemberListPage from "../pages/MemberListPage";
import MemberDetailPage from "../pages/MemberDetailPage";

// let loadOnce = false;
export default function MainAppEntryComponent(){
    const {userInfo} = useSelector((state)=>state.userSignIn);

    return (
        <React.Fragment>
            {(userInfo?.is_owner) ?
                (userInfo?.gym_data) ?
                    <Switch>
                        <Route exact path={`/dashboard/home`} component={GymOwnerUserDashboard}/>
                        <Route exact path={"/dashboard/member"} component={MemberPage}/>
                        <Route exact path={"/dashboard/all-members"} component={MemberListPage}/>
                        <Route exact path={"/dashboard/member-details/:id"} component={MemberDetailPage}/>
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
            <AddEditMemberModalComponent/>
        </React.Fragment>
    )
}