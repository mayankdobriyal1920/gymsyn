import React from 'react';
import {IonCol,IonRow} from '@ionic/react';
function MemberPaymentDetailComponents() {
    return (
        <div className={"dashboard_widgets_container"}>
            <IonRow>
                <IonCol size={3}>Name</IonCol>
                <IonCol size={1}>:</IonCol>
                <IonCol size={8}>Mayank Dobriyal</IonCol>
            </IonRow>
            <IonRow>
                <IonCol size={3}>Contact</IonCol>
                <IonCol size={1}>:</IonCol>
                <IonCol size={8}>789876576</IonCol>
            </IonRow>
            <IonRow>
                <IonCol size={3}>Group</IonCol>
                <IonCol size={1}>:</IonCol>
                <IonCol size={8}>Morning</IonCol>
            </IonRow>
            <IonRow>
                <IonCol size={3}>Status</IonCol>
                <IonCol size={1}>:</IonCol>
                <IonCol size={8}>ACTIVE</IonCol>
            </IonRow>
            <IonRow>
                <IonCol size={3}>Address</IonCol>
                <IonCol size={1}>:</IonCol>
                <IonCol size={8}>Delhi, nangloi 122a ext 1b</IonCol>
            </IonRow>
            <IonRow>
                <IonCol size={3}>Gender</IonCol>
                <IonCol size={1}>:</IonCol>
                <IonCol size={8}>Male</IonCol>
            </IonRow>
            <IonRow>
                <IonCol size={3}>Joining</IonCol>
                <IonCol size={1}>:</IonCol>
                <IonCol size={8}>02 May 2020</IonCol>
            </IonRow>
            <IonRow>
                <IonCol size={3}>Today</IonCol>
                <IonCol size={1}>:</IonCol>
                <IonCol size={8}>ABSENT</IonCol>
            </IonRow>
        </div>
    );
}

export default MemberPaymentDetailComponents;