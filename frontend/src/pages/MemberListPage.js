import React, {useEffect} from 'react';
import {IonContent, IonGrid, IonPage} from '@ionic/react';
import SubHeaderComponent from "../components/SubHeaderComponent";
import {useHistory} from "react-router-dom";
import {App} from "@capacitor/app";
import {Capacitor} from "@capacitor/core";

let backButtonListener = null;
let memberArrayList = [
    {id:'36724-234-ret-234',name:'Mayank Dobriyal',phone:'9876657754'},
    {id:'322344-234-ret-234',name:'Amit Negi',phone:'5756545346'},
    {id:'324-234-r234et-2234',name:'Naman Rawat',phone:'7656545432'},
    {id:'324-234-ret-2454334',name:'Subham Payal',phone:'7675665634'},
    {id:'324-234-r234et-2234',name:'Naman Rawat',phone:'7656545432'},
    {id:'324-234-ret-2454334',name:'Subham Payal',phone:'7675665634'},
    {id:'324-234-ret-2454334',name:'Subham Payal',phone:'7675665634'},
    {id:'324-234-ret-2454334',name:'Subham Payal',phone:'7675665634'},
    {id:'324-234-ret-2454334',name:'Subham Payal',phone:'7675665634'},
    {id:'324-234-ret-2454334',name:'Subham Payal',phone:'7675665634'},
    {id:'324-234-ret-2454334',name:'Subham Payal',phone:'7675665634'},
    {id:'324-234-ret-2454334',name:'Subham Payal',phone:'7675665634'},
    {id:'324-234-ret-2454334',name:'Subham Payal',phone:'7675665634'},
    {id:'324-234-ret-2454334',name:'Subham Payal',phone:'7675665634'},
    {id:'324-234-ret-2454334',name:'Subham Payal',phone:'7675665634'},
    {id:'324-234-ret-2454334',name:'Subham Payal',phone:'7675665634'},
    {id:'324-234-ret-2454334',name:'Subham Payal',phone:'7675665634'},
    {id:'324-234-ret-2454334',name:'Subham Payal',phone:'7675665634'}
]
function MemberListPage() {
    const history = useHistory();
    const goToPage = (page)=>{
        history.push(page);
    }

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
            <SubHeaderComponent name={"All Member"}/>
            <IonContent className={"ion-padding theme_bg"}>
                <IonGrid className={"user_list_grid main_text"}>
                    {(memberArrayList?.map((member) => (
                        <div key={member?.id} onClick={()=>goToPage('/dashboard/member-details/'+member?.id)} className={"user_list_row dashboard_widgets_container"}>
                            <div className={"ion-text-left"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 24 24" fill="none"><path d="M6.02958 19.4012C5.97501 19.9508 6.3763 20.4405 6.92589 20.4951C7.47547 20.5497 7.96523 20.1484 8.01979 19.5988L6.02958 19.4012ZM15.9802 19.5988C16.0348 20.1484 16.5245 20.5497 17.0741 20.4951C17.6237 20.4405 18.025 19.9508 17.9704 19.4012L15.9802 19.5988ZM20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4ZM13 10C13 10.5523 12.5523 11 12 11V13C13.6569 13 15 11.6569 15 10H13ZM12 11C11.4477 11 11 10.5523 11 10H9C9 11.6569 10.3431 13 12 13V11ZM11 10C11 9.44772 11.4477 9 12 9V7C10.3431 7 9 8.34315 9 10H11ZM12 9C12.5523 9 13 9.44772 13 10H15C15 8.34315 13.6569 7 12 7V9ZM8.01979 19.5988C8.22038 17.5785 9.92646 16 12 16V14C8.88819 14 6.33072 16.3681 6.02958 19.4012L8.01979 19.5988ZM12 16C14.0735 16 15.7796 17.5785 15.9802 19.5988L17.9704 19.4012C17.6693 16.3681 15.1118 14 12 14V16Z" fill="#ffffff"/></svg>
                            </div>
                            <div className={"ion-text-left member_detail_text"}>
                                {member?.name} {member?.phone}
                            </div>
                            <div className={"ion-text-right further_detail_arrow"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="15px" viewBox="0 0 32 32" version="1.1"><path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"/></svg>
                            </div>
                        </div>
                    )))}
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default MemberListPage;