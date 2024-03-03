import React, {useState} from 'react';
import {
    IonButton,
    IonButtons, IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonMenuButton,
    IonPage, IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import OwnerMainDashboardMenu from "./OwnerMainDashboardMenu";
import {useDispatch, useSelector} from "react-redux";
import {BarChartComponent} from "./BarChartComponent";
import {actionToOpenCloseAddMemberModalPopup} from "../store/reducers/add.member.modal.slice";

const filterValuesArray = [
    'Today',
    'Yesterday',
    'This Week',
    'Last Week',
    'This Month',
    'Last Month',
    'Custom',
];
export default function GymOwnerUserDashboard(){
    const {userInfo} = useSelector((state)=>state.userSignIn);
    const [filterValue, setFilterValue] = useState('Today');
    const dispatch = useDispatch();
    const callFunctionToOpenCloseAddMemberPopup = ()=>{
        dispatch(actionToOpenCloseAddMemberModalPopup(true));
    }
    return (
        <React.Fragment>
            <OwnerMainDashboardMenu/>
            <IonPage className={"theme_bg"} id="gym-dashboard-main-page">
                <IonHeader className={"gym_owner_main_dashboard_header"}>
                    <IonToolbar className={"theme_bg heading"}>
                        <IonButtons slot="start">
                            <IonMenuButton/>
                        </IonButtons>
                        <IonButtons slot="end">
                            <IonButton>
                                <svg viewBox="0 0 24 24" width={"30px"} fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="9" r="3" stroke="#ffffff" strokeWidth="1.5"/><circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5"/><path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                            </IonButton>
                        </IonButtons>
                        <IonTitle className={"ion-text-left header-title heading"}>Dashboard</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className={"ion-padding gym_owner_main_dashboard_content"}>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <div className={"sub_heading"}>Summary</div>
                                <div className={"sub_text"}>{userInfo?.gym_data?.name}</div>
                            </IonCol>
                            <IonCol className={"ion-text-right ion-align-items-center ion-justify-content-center"}>
                                <select className={"filter_dashboard_menu"}
                                        onChange={(e)=>setFilterValue(e.target.value)}
                                        value={filterValue}>
                                    {filterValuesArray.map(value => (
                                        <option key={value} value={value}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonGrid>
                        <IonRow>
                            <IonCol className="dashboard_widgets_container">
                                <IonCol>
                                    <div className={"sub_text"}>Attendance</div>
                                    <div className="dashboard_widgets_container_chart_section">
                                        <BarChartComponent/>
                                    </div>
                                </IonCol>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonGrid>
                        <IonRow>
                            <IonCol className="dashboard_widgets_container margin-right-column">
                                <IonCol>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 24 24" fill="none"><path d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z" fill="#FFFFFF"/><path opacity="0.4" d="M19.5 7.5C19.5 8.88071 18.3807 10 17 10C15.6193 10 14.5 8.88071 14.5 7.5C14.5 6.11929 15.6193 5 17 5C18.3807 5 19.5 6.11929 19.5 7.5Z" fill="#FFFFFF"/><path opacity="0.4" d="M4.5 7.5C4.5 8.88071 5.61929 10 7 10C8.38071 10 9.5 8.88071 9.5 7.5C9.5 6.11929 8.38071 5 7 5C5.61929 5 4.5 6.11929 4.5 7.5Z" fill="#FFFFFF"/><path d="M18 16.5C18 18.433 15.3137 20 12 20C8.68629 20 6 18.433 6 16.5C6 14.567 8.68629 13 12 13C15.3137 13 18 14.567 18 16.5Z" fill="#FFFFFF"/><path opacity="0.4" d="M22 16.5C22 17.8807 20.2091 19 18 19C15.7909 19 14 17.8807 14 16.5C14 15.1193 15.7909 14 18 14C20.2091 14 22 15.1193 22 16.5Z" fill="#FFFFFF"/><path opacity="0.4" d="M2 16.5C2 17.8807 3.79086 19 6 19C8.20914 19 10 17.8807 10 16.5C10 15.1193 8.20914 14 6 14C3.79086 14 2 15.1193 2 16.5Z" fill="#FFFFFF"/></svg>
                                    <div className={"sub_heading text_detail"}>Members</div>
                                    <div className={"sub_heading_logo_color text_detail"}>300</div>
                                </IonCol>
                            </IonCol>
                            <IonCol className="dashboard_widgets_container margin-left-column">
                                <IonCol>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 1024 1024" className="icon" version="1.1"><path d="M58.514286 526.628571c-14.628571 0-21.942857-14.628571-21.942857-29.257142 0-36.571429 14.628571-117.028571 65.828571-204.8 7.314286-14.628571 21.942857-14.628571 36.571429-7.314286s21.942857 29.257143 7.314285 36.571428c-43.885714 87.771429-58.514286 153.6-58.514285 182.857143 0 14.628571-14.628571 21.942857-29.257143 21.942857zM160.914286 285.257143c-7.314286 0-14.628571 0-14.628572-7.314286-14.628571-7.314286-14.628571-29.257143-7.314285-36.571428 51.2-65.828571 117.028571-117.028571 182.857142-153.6 14.628571-7.314286 29.257143 0 36.571429 14.628571 7.314286 14.628571 0 29.257143-14.628571 36.571429-58.514286 29.257143-109.714286 73.142857-160.914286 131.657142 0 7.314286-7.314286 14.628571-21.942857 14.628572zM424.228571 109.714286c-14.628571 0-21.942857-7.314286-29.257142-21.942857 0-14.628571 7.314286-29.257143 21.942857-36.571429 43.885714-14.628571 95.085714-14.628571 146.285714-14.628571 21.942857 7.314286 29.257143 21.942857 29.257143 36.571428s-14.628571 29.257143-29.257143 29.257143c-43.885714-7.314286-87.771429-7.314286-138.971429 7.314286 7.314286 0 7.314286 0 0 0zM775.314286 160.914286c-7.314286 0-7.314286 0-14.628572-7.314286-43.885714-29.257143-95.085714-43.885714-146.285714-58.514286-7.314286 7.314286-21.942857-7.314286-14.628571-21.942857 0-14.628571 14.628571-21.942857 29.257142-21.942857 58.514286 14.628571 109.714286 29.257143 160.914286 65.828571 14.628571 7.314286 14.628571 21.942857 7.314286 36.571429 0 7.314286-14.628571 7.314286-21.942857 7.314286zM994.742857 599.771429c-14.628571 0-29.257143-14.628571-29.257143-29.257143-7.314286-160.914286-58.514286-285.257143-146.285714-365.714286-14.628571-7.314286-14.628571-29.257143 0-36.571429 7.314286-14.628571 29.257143-14.628571 36.571429 0 95.085714 87.771429 153.6 226.742857 160.914285 402.285715 7.314286 14.628571-7.314286 29.257143-21.942857 29.257143z" fill="#FFFFFF"/><path d="M826.514286 914.285714h-7.314286c-14.628571-7.314286-21.942857-21.942857-14.628571-36.571428 0 0 14.628571-43.885714 36.571428-131.657143 21.942857-87.771429 7.314286-204.8 7.314286-204.8 0-124.342857-73.142857-241.371429-190.171429-292.571429-14.628571-7.314286-21.942857-21.942857-14.628571-36.571428 7.314286-14.628571 21.942857-21.942857 36.571428-14.628572 131.657143 58.514286 219.428571 190.171429 219.428572 336.457143 0 0 14.628571 124.342857-7.314286 219.428572-21.942857 95.085714-43.885714 138.971429-43.885714 138.971428-7.314286 14.628571-14.628571 21.942857-21.942857 21.942857zM336.457143 277.942857c-7.314286 0-14.628571-7.314286-21.942857-14.628571-7.314286-7.314286 0-21.942857 7.314285-29.257143 80.457143-58.514286 175.542857-80.457143 270.628572-58.514286 14.628571 0 21.942857 14.628571 21.942857 29.257143s-14.628571 21.942857-29.257143 21.942857c-80.457143-14.628571-160.914286 0-226.742857 51.2h-21.942857zM65.828571 694.857143c-14.628571 0-21.942857-7.314286-29.257142-21.942857 0-14.628571 7.314286-29.257143 21.942857-29.257143 0 0 29.257143-7.314286 58.514285-36.571429 21.942857-21.942857 43.885714-58.514286 51.2-73.142857 0-80.457143 29.257143-160.914286 80.457143-226.742857 7.314286-14.628571 29.257143-21.942857 36.571429-7.314286 14.628571 7.314286 14.628571 21.942857 7.314286 36.571429-43.885714 58.514286-73.142857 124.342857-73.142858 197.485714v7.314286c0 7.314286-21.942857 73.142857-65.828571 102.4-43.885714 36.571429-80.457143 51.2-80.457143 51.2H65.828571z" fill="#FFFFFF"/><path d="M124.342857 789.942857c-7.314286 0-14.628571-7.314286-21.942857-14.628571-7.314286-14.628571-7.314286-29.257143 7.314286-36.571429 0 0 95.085714-65.828571 124.342857-87.771428 7.314286-7.314286 29.257143-43.885714 36.571428-80.457143 0-58.514286 36.571429-160.914286 73.142858-204.8 0 0 14.628571-21.942857 51.2-43.885715 29.257143-14.628571 65.828571-29.257143 102.4-29.257142 14.628571-7.314286 29.257143 0 29.257142 14.628571s-7.314286 29.257143-21.942857 29.257143c-29.257143 0-51.2 7.314286-73.142857 21.942857-29.257143 21.942857-43.885714 36.571429-43.885714 36.571429-29.257143 36.571429-65.828571 131.657143-65.828572 182.857142V585.142857c-7.314286 21.942857-29.257143 87.771429-58.514285 117.028572-21.942857 14.628571-117.028571 80.457143-124.342857 87.771428h-14.628572zM702.171429 438.857143c-7.314286 0-14.628571 0-21.942858-7.314286-21.942857-36.571429-58.514286-65.828571-102.4-80.457143-14.628571-7.314286-21.942857-21.942857-14.628571-36.571428 0-14.628571 21.942857-21.942857 36.571429-14.628572 51.2 21.942857 102.4 58.514286 131.657142 95.085715 7.314286 14.628571 7.314286 29.257143-7.314285 36.571428-7.314286 7.314286-14.628571 7.314286-21.942857 7.314286zM724.114286 716.8s-7.314286 0 0 0c-21.942857-7.314286-29.257143-21.942857-29.257143-36.571429 7.314286-21.942857 7.314286-36.571429 14.628571-43.885714 7.314286-29.257143 7.314286-95.085714 7.314286-95.085714 0-14.628571 0-36.571429-7.314286-51.2 0-14.628571 7.314286-29.257143 21.942857-36.571429 14.628571-7.314286 29.257143 7.314286 36.571429 21.942857 7.314286 21.942857 7.314286 43.885714 7.314286 65.828572 0 0-7.314286 73.142857-7.314286 102.4 0 7.314286-7.314286 21.942857-7.314286 43.885714-14.628571 14.628571-21.942857 29.257143-36.571428 29.257143z" fill="#FFFFFF"/><path d="M665.6 928.914286H658.285714c-14.628571-7.314286-21.942857-21.942857-14.628571-36.571429 0 0 21.942857-80.457143 43.885714-153.6 0-14.628571 21.942857-21.942857 36.571429-21.942857s21.942857 14.628571 21.942857 36.571429c-14.628571 73.142857-43.885714 153.6-43.885714 153.6-14.628571 14.628571-21.942857 21.942857-36.571429 21.942857z" fill="#FFFFFF"/><path d="M548.571429 936.228571c-21.942857-7.314286-29.257143-21.942857-29.257143-36.571428l80.457143-329.142857c14.628571-43.885714-14.628571-87.771429-58.514286-102.4-43.885714-7.314286-95.085714 21.942857-102.4 65.828571l-73.142857 212.114286-146.285715 117.028571c-14.628571 14.628571-36.571429 14.628571-43.885714 0-7.314286-14.628571-7.314286-29.257143 7.314286-36.571428l138.971428-109.714286 65.828572-190.171429c0-36.571429 29.257143-73.142857 58.514286-87.771428 29.257143-21.942857 73.142857-29.257143 109.714285-14.628572C629.028571 438.857143 680.228571 512 658.285714 592.457143l-80.457143 329.142857c0 7.314286-14.628571 14.628571-29.257142 14.628571z" fill="#FFFFFF"/><path d="M387.657143 943.542857h-14.628572c-14.628571-7.314286-14.628571-21.942857-7.314285-36.571428l80.457143-146.285715 43.885714-204.8c0-14.628571 14.628571-21.942857 29.257143-21.942857s21.942857 14.628571 21.942857 29.257143l-43.885714 219.428571-87.771429 153.6s-14.628571 7.314286-21.942857 7.314286z" fill="#FFFFFF"/></svg>
                                    <div className={"sub_heading text_detail"}>Attendance</div>
                                    <div className={"sub_heading_logo_color text_detail"}>250</div>
                                </IonCol>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonGrid>
                        <IonRow>
                            <IonCol className="dashboard_widgets_container margin-right-column">
                                <IonCol>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="30px" viewBox="0 0 32 32"><path d="M31,7H1A1,1,0,0,0,0,8V24a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V8A1,1,0,0,0,31,7ZM25.09,23H6.91A6,6,0,0,0,2,18.09V13.91A6,6,0,0,0,6.91,9H25.09A6,6,0,0,0,30,13.91v4.18A6,6,0,0,0,25.09,23ZM30,11.86A4,4,0,0,1,27.14,9H30ZM4.86,9A4,4,0,0,1,2,11.86V9ZM2,20.14A4,4,0,0,1,4.86,23H2ZM27.14,23A4,4,0,0,1,30,20.14V23Z"/><path d="M7.51.71a1,1,0,0,0-.76-.1,1,1,0,0,0-.61.46l-2,3.43a1,1,0,0,0,1.74,1L7.38,2.94l5.07,2.93a1,1,0,0,0,1-1.74Z"/><path d="M24.49,31.29a1,1,0,0,0,.5.14.78.78,0,0,0,.26,0,1,1,0,0,0,.61-.46l2-3.43a1,1,0,1,0-1.74-1l-1.48,2.56-5.07-2.93a1,1,0,0,0-1,1.74Z"/><path d="M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z"/></svg>
                                    <div className={"sub_heading text_detail"}>Collection</div>
                                    <div className={"sub_heading_logo_color text_detail"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="23px" width="20px" viewBox="0 0 24 24" fill="none"><path d="M6 4H10.5M10.5 4C12.9853 4 15 6.01472 15 8.5C15 10.9853 12.9853 13 10.5 13H6L13 20M10.5 4H18M6 8.5H18" stroke="#E70000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        2,323
                                    </div>
                                </IonCol>
                            </IonCol>
                            <IonCol className="dashboard_widgets_container margin-left-column">
                                <IonCol>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="30px" viewBox="0 0 1024 1024"><path d="M212.826 645.495c98.432 0 171.947-37.76 171.947-71.509v-55.595c-38.059 27.435-99.584 44.715-171.947 44.715s-133.931-17.28-171.947-44.715v55.595c0 33.749 73.515 71.509 171.947 71.509zm0 122.582c98.432 0 171.947-37.76 171.947-71.509v-54.912c-38.059 27.435-99.584 44.715-171.947 44.715s-133.931-17.28-171.947-44.715v54.912c0 33.749 73.515 71.509 171.947 71.509zm171.946 53.12h.085c0-.213-.085-.469-.085-.64v-56.32c-38.059 27.477-99.584 44.715-171.947 44.715S78.894 791.715 40.878 764.237v56.96c0 33.749 73.515 71.509 171.947 71.509s171.947-37.76 171.947-71.509zM212.826 379.213c-98.432 0-171.947 37.76-171.947 71.509 0 33.792 73.515 71.509 171.947 71.509s171.947-37.717 171.947-71.509c0-33.749-73.515-71.509-171.947-71.509zm0-40.832c121.301 0 212.821 48.299 212.821 112.341v369.835c0 .171-.085.427-.085.64h.085c0 64.085-91.52 112.384-212.821 112.384-115.755 0-204.16-43.989-212.053-103.723-.427-1.664-.768-3.413-.768-5.248V450.722c0-64.043 91.477-112.341 212.821-112.341zM949.756 128c39.424 0 71.509 32.085 71.509 71.509V862.08c0 39.424-32.085 71.509-71.509 71.509H545.105c-39.424 0-71.509-32.085-71.509-71.509V199.509c0-39.424 32.085-71.509 71.509-71.509h404.651zm30.634 734.08V199.509c0-16.896-13.739-30.677-30.635-30.677H545.104c-16.896 0-30.635 13.781-30.635 30.677V862.08c0 16.896 13.739 30.635 30.635 30.635h404.651c16.896 0 30.635-13.739 30.635-30.635zm-79.867-594.573c16.853 0 30.635 13.739 30.635 30.635v80.939c0 16.896-13.781 30.635-30.635 30.635H594.347c-16.896 0-30.677-13.739-30.677-30.635v-80.939c0-16.896 13.781-30.635 30.677-30.635h306.176zM604.544 368.841h285.781V308.34H604.544v60.501zm13.367 114.803c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.792-33.792 33.792s-33.792-15.147-33.792-33.792c0-18.688 15.147-33.792 33.792-33.792zm129.519 0c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.792-33.792 33.792s-33.792-15.147-33.792-33.792c0-18.688 15.147-33.792 33.792-33.792zm129.502-2.812c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.792-33.792 33.792s-33.792-15.147-33.792-33.792c0-18.688 15.147-33.792 33.792-33.792zM617.911 604.727c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792zm129.519 0c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792zm129.502 0c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792zM617.911 728.602c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792zm129.519 0c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792zm129.502 0c18.645 0 33.792 15.104 33.792 33.792 0 18.645-15.147 33.749-33.792 33.749s-33.792-15.104-33.792-33.749c0-18.688 15.147-33.792 33.792-33.792z"/></svg>
                                    <div className={"sub_heading text_detail"}>Expense</div>
                                    <div className={"sub_heading_logo_color text_detail"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="23px" viewBox="0 0 24 24" fill="none"><path d="M6 4H10.5M10.5 4C12.9853 4 15 6.01472 15 8.5C15 10.9853 12.9853 13 10.5 13H6L13 20M10.5 4H18M6 8.5H18" stroke="#E70000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        1,234
                                    </div>
                                </IonCol>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonGrid>
                        <IonRow>
                            <IonCol className="dashboard_widgets_container margin-right-column">
                                <IonCol>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 64 64" strokeWidth="3" stroke="#ffffff" fill="none"><path d="M52,27.18V52.76a2.92,2.92,0,0,1-3,2.84H15a2.92,2.92,0,0,1-3-2.84V27.17"/><polyline points="26.26 55.52 26.26 38.45 37.84 38.45 37.84 55.52"/><path d="M8.44,19.18s-1.1,7.76,6.45,8.94a7.17,7.17,0,0,0,6.1-2A7.43,7.43,0,0,0,32,26a7.4,7.4,0,0,0,5,2.49,11.82,11.82,0,0,0,5.9-2.15,6.66,6.66,0,0,0,4.67,2.15,8,8,0,0,0,7.93-9.3L50.78,9.05a1,1,0,0,0-.94-.65H14a1,1,0,0,0-.94.66Z"/><line x1="8.44" y1="19.18" x2="55.54" y2="19.18"/><line x1="21.04" y1="19.18" x2="21.04" y2="8.4"/><line x1="32.05" y1="19.18" x2="32.05" y2="8.4"/><line x1="43.01" y1="19.18" x2="43.01" y2="8.4"/></svg>
                                    <div className={"sub_heading text_detail"}>Store</div>
                                    <div className={"sub_heading_logo_color text_detail"}>
                                       23
                                    </div>
                                </IonCol>
                            </IonCol>
                            <IonCol className="dashboard_widgets_container margin-left-column">
                                <IonCol>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.29664 4.72727V5.25342C6.60683 6.35644 4.7276 9.97935 4.79579 13.1192L4.79577 14.8631C3.4188 16.6333 3.49982 19.2727 6.93518 19.2727H9.29664C9.29664 19.996 9.57852 20.6897 10.0803 21.2012C10.582 21.7127 11.2625 22 11.9721 22C12.6817 22 13.3622 21.7127 13.8639 21.2012C14.3656 20.6897 14.6475 19.996 14.6475 19.2727H17.0155C20.4443 19.2727 20.494 16.6278 19.1172 14.8576L19.1555 13.1216C19.2248 9.97811 17.3419 6.35194 14.6475 5.25049V4.72727C14.6475 4.00395 14.3656 3.31026 13.8639 2.7988C13.3622 2.28734 12.6817 2 11.9721 2C11.2625 2 10.582 2.28734 10.0803 2.7988C9.57852 3.31026 9.29664 4.00395 9.29664 4.72727ZM12.8639 4.72727C12.8639 4.72727 12.8633 4.76414 12.8622 4.78246C12.5718 4.74603 12.2759 4.72727 11.9757 4.72727C11.673 4.72727 11.3747 4.74634 11.082 4.78335C11.0808 4.76474 11.0803 4.74603 11.0803 4.72727C11.0803 4.48617 11.1742 4.25494 11.3415 4.08445C11.5087 3.91396 11.7356 3.81818 11.9721 3.81818C12.2086 3.81818 12.4354 3.91396 12.6027 4.08445C12.7699 4.25494 12.8639 4.48617 12.8639 4.72727ZM11.0803 19.2727C11.0803 19.5138 11.1742 19.7451 11.3415 19.9156C11.5087 20.086 11.7356 20.1818 11.9721 20.1818C12.2086 20.1818 12.4354 20.086 12.6027 19.9156C12.7699 19.7451 12.8639 19.5138 12.8639 19.2727H11.0803ZM17.0155 17.4545C17.7774 17.4545 18.1884 16.5435 17.6926 15.9538C17.4516 15.6673 17.3233 15.3028 17.3316 14.9286L17.3723 13.0808C17.4404 9.99416 15.0044 6.54545 11.9757 6.54545C8.94765 6.54545 6.51196 9.99301 6.57898 13.0789L6.61916 14.9289C6.62729 15.303 6.49893 15.6674 6.25806 15.9538C5.76221 16.5435 6.17325 17.4545 6.93518 17.4545H17.0155ZM16.9799 3.20202C17.2945 2.74813 17.9176 2.63524 18.3715 2.94988C19.5192 3.74546 20.8956 5.65348 21.6471 7.9126C21.8214 8.43664 21.5379 9.00279 21.0139 9.17712C20.4898 9.35145 19.9237 9.06795 19.7493 8.5439C19.0892 6.55949 17.9221 5.07189 17.2321 4.59358C16.7782 4.27894 16.6653 3.65592 16.9799 3.20202ZM5.4303 2.94988C5.8842 2.63524 6.50722 2.74813 6.82185 3.20202C7.13649 3.65592 7.0236 4.27894 6.56971 4.59358C5.87969 5.07189 4.71256 6.55949 4.05242 8.5439C3.87809 9.06795 3.31194 9.35145 2.78789 9.17712C2.26384 9.00279 1.98034 8.43664 2.15467 7.9126C2.90619 5.65348 4.2826 3.74546 5.4303 2.94988Z" fill="#ffffff"/></svg>
                                    <div className={"sub_heading text_detail"}>Notifications</div>
                                    <div className={"sub_heading_logo_color text_detail"}>
                                       21
                                    </div>
                                </IonCol>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <div className={"bottom_footer_add_button_section"}>
                        <div onClick={()=>callFunctionToOpenCloseAddMemberPopup()} className={"bottom_footer_add_button_section_inner"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45px" viewBox="0 0 512 512" version="1.1"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="drop" fill="#ffffff" transform="translate(42.666667, 42.666667)"><path d="M213.333333,3.55271368e-14 C269.912851,3.55271368e-14 324.175019,22.4761259 364.18278,62.4838867 C404.190541,102.491647 426.666667,156.753816 426.666667,213.333333 C426.666667,331.15408 331.15408,426.666667 213.333333,426.666667 C95.5125867,426.666667 3.55271368e-14,331.15408 3.55271368e-14,213.333333 C3.55271368e-14,95.5125867 95.5125867,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.076736,42.6666667 42.6666667,119.076736 42.6666667,213.333333 C42.6666667,307.589931 119.076736,384 213.333333,384 C258.596948,384 302.006682,366.019099 334.012891,334.012891 C366.019099,302.006682 384,258.596948 384,213.333333 C384,119.076736 307.589931,42.6666667 213.333333,42.6666667 Z M234.666667,106.666667 L234.666,192 L320,192 L320,234.666667 L234.666,234.666 L234.666667,320 L192,320 L192,234.666 L106.666667,234.666667 L106.666667,192 L192,192 L192,106.666667 L234.666667,106.666667 Z" id="add-workorder"></path></g></g></svg>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}