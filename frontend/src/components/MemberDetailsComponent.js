import React from 'react';
import {IonCol, IonGrid, IonRow} from '@ionic/react';
function MemberDetailsComponent() {
    return (
        <div className={"member_page_widgets_container main_text"}>
            <div className={"user_image_section_svg"}>
                <svg viewBox="0 0 24 24" width="100px" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="9" r="3" stroke="#ffffff" strokeWidth="1.5"></circle><circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5"></circle><path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                <div><b>Mayank Dobriyal</b></div>
                <div><b>Join on : 2 Feb 24</b></div>
            </div>
            <IonGrid className={"main_text ion-padding member_detail_grid"}>
                <IonRow>
                    <IonCol size={3}>Contact</IonCol>
                    <IonCol size={9} className={"ion-text-end"}>789876576</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size={3}>Group</IonCol>
                    <IonCol size={9} className={"ion-text-end"}>Morning</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size={3}>Status</IonCol>
                    <IonCol size={9} className={"ion-text-end"}>ACTIVE</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size={3}>Address</IonCol>
                    <IonCol size={9} className={"ion-text-end"}>Delhi, nangloi 122a ext 1b</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size={3}>Gender</IonCol>
                    <IonCol size={9} className={"ion-text-end"}>Male</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size={3}>Today</IonCol>
                    <IonCol size={9} className={"ion-text-end"}>ABSENT</IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
}

export default MemberDetailsComponent;