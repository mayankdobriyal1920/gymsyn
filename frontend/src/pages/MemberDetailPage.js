import React, {useEffect, useState} from 'react';
import {IonCol, IonContent, IonGrid, IonPage, IonRow} from '@ionic/react';
import SubHeaderComponent from "../components/SubHeaderComponent";
import {useHistory} from "react-router-dom";
import {App} from "@capacitor/app";
import {Capacitor} from "@capacitor/core";
import MemberDetailsComponent from "../components/MemberDetailsComponent";
import MemberMemberShipDetailComponents from "../components/MemberMemberShipDetailComponents";
import MemberAttendanceDetailComponents from "../components/MemberAttendanceDetailComponents";
import MemberPaymentDetailComponents from "../components/MemberPaymentDetailComponents";

let backButtonListener = null;

function MemberDetailPage() {
    const history = useHistory();
    const [selectedTabName,setSelectedTabName] = useState('membership');

    useEffect(() => {
        const handleBackButton = ()=>{
            history.goBack();
        }

        if(Capacitor.isNativePlatform()) {
            // Add listener for the backButton event
            backButtonListener = App.addListener('backButton', () => {
                handleBackButton();
            });
        }

        // Cleanup listener on component unmount
        return () => {
            if(Capacitor.isNativePlatform()) {
                if (backButtonListener)
                    backButtonListener.remove()
            }
        };
    }, []);
    return (
        <IonPage>
            <SubHeaderComponent name={"Member Details"}/>
            <div className={"member_detail_main_container"}>
                <MemberDetailsComponent/>
                <IonRow className={"main_text"}>
                    <IonCol onClick={() => setSelectedTabName('membership')}
                            className={"tab_buttons ion-text-center " + (selectedTabName === 'membership' ? 'active' : '')}>Membership</IonCol>
                    <IonCol onClick={() => setSelectedTabName('attendance')}
                            className={"tab_buttons ion-text-center " + (selectedTabName === 'attendance' ? 'active' : '')}>Attendance</IonCol>
                    <IonCol onClick={() => setSelectedTabName('payment')}
                            className={"tab_buttons ion-text-center " + (selectedTabName === 'payment' ? 'active' : '')}>Payments</IonCol>
                </IonRow>
            </div>
            <IonContent className={"ion-padding main_text"}>
                {(selectedTabName === 'membership') ?
                    <MemberMemberShipDetailComponents/>
                    : (selectedTabName === 'attendance') ?
                        <MemberAttendanceDetailComponents/>
                        : (selectedTabName === 'payment') ?
                            <MemberPaymentDetailComponents/>
                            : ''
                }
            </IonContent>
        </IonPage>
    );
}

export default MemberDetailPage;