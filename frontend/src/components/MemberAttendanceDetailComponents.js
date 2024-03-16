import React from 'react';
import {IonCol, IonGrid, IonRow} from '@ionic/react';
function MemberAttendanceDetailComponents() {
    return (
        <div className={"dashboard_widgets_container"}>
            <IonGrid>
                <IonRow>
                    <IonCol size={4}><b>Date</b></IonCol>
                    <IonCol size={4}><b>Time</b></IonCol>
                    <IonCol size={4}><b>Duration</b></IonCol>
                </IonRow>
            </IonGrid>
            <IonGrid>
                <IonRow>
                    <IonCol size={4}>12 Feb 2024</IonCol>
                    <IonCol size={4}>9:00 AM</IonCol>
                    <IonCol size={4}>1h 23m</IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
}

export default MemberAttendanceDetailComponents;