import React, {useEffect, useState} from 'react';
import {IonCol, IonContent, IonGrid, IonPage, IonRow} from '@ionic/react';
import SubHeaderComponent from "../components/SubHeaderComponent";
import {useHistory} from "react-router-dom";
import {App} from "@capacitor/app";
import {Capacitor} from "@capacitor/core";

let backButtonListener = null;
let memberArrayList = {id:'36724-234-ret-234',name:'Mayank Dobriyal',phone:'9876657754'}

function MemberDetailPage() {
    const history = useHistory();
    const [selectedTabName,setSelectedTabName] = useState('detail');

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
            <IonContent className={"ion-padding theme_bg"}>
                <IonGrid className={"member_detail_main_container"}>
                    <IonRow className={"main_text"}>
                        <IonCol onClick={()=>setSelectedTabName('detail')} className={"tab_buttons ion-text-center "+(selectedTabName === 'detail' ? 'active' : '')}>Detail</IonCol>
                        <IonCol onClick={()=>setSelectedTabName('membership')} className={"tab_buttons ion-text-center "+(selectedTabName === 'membership' ? 'active' : '')}>Membership</IonCol>
                        <IonCol onClick={()=>setSelectedTabName('attendance')} className={"tab_buttons ion-text-center "+(selectedTabName === 'attendance' ? 'active' : '')}>Attendance</IonCol>
                        <IonCol onClick={()=>setSelectedTabName('payment')} className={"tab_buttons ion-text-center "+(selectedTabName === 'payment' ? 'active' : '')}>Payments</IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid className={"ion-padding member_detail_tab_inner_container main_text"}>
                    {(selectedTabName === 'detail') ?
                        <div className={"dashboard_widgets_container"}>
                            <IonRow>
                                <IonCol size={3}>Name :</IonCol>
                                <IonCol size={9}>Mayank Dobriyal</IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size={3}>Contact :</IonCol>
                                <IonCol size={9}>789876576</IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size={3}>Group :</IonCol>
                                <IonCol size={9}>Morning</IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size={3}>Status :</IonCol>
                                <IonCol size={9}>ACTIVE</IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size={3}>Address :</IonCol>
                                <IonCol size={9}>Delhi, nangloi 122a ext 1b</IonCol>
                            </IonRow>
                        </div>
                        :
                        ''
                    }
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default MemberDetailPage;