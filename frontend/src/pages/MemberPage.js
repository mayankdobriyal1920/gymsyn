import React from 'react';
import {IonContent, IonPage} from '@ionic/react';
import SubHeaderComponent from "../components/SubHeaderComponent";
function MemberPage() {
    return (
        <IonPage>
            <SubHeaderComponent name={"Member"}/>
            <IonContent className={"ion-padding theme_bg"}>

            </IonContent>
        </IonPage>
    );
}
export default MemberPage;