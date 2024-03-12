import React, {useEffect} from 'react';
import {IonCol, IonContent, IonGrid, IonItem, IonPage, IonRow} from '@ionic/react';
import SubHeaderComponent from "../components/SubHeaderComponent";
import {useHistory} from "react-router-dom";
import {App} from "@capacitor/app";
import {Capacitor} from "@capacitor/core";
import {actionToOpenCloseAddMemberModalPopup} from "../store/reducers/add.member.modal.slice";
import {useDispatch} from "react-redux";

let backButtonListener = null;
let memberArrayList = [
    {id:'36724-234-ret-234',name:'Mayank Dobriyal',phone:'9876657754'},
    {id:'322344-234-ret-234',name:'Amit Negi',phone:'5756545346'},
    {id:'324-234-ret-2454334',name:'Subham Payal',phone:'7675665634'},
    {id:'324-234-r234et-2234',name:'Naman Rawat',phone:'7656545432'}
]
let groupArrayList = [
    {id:'36724-234-r345et-234',name:'Morning'},
    {id:'322344-234-r34et-234',name:'Noon'},
    {id:'322344-234-r34et-234',name:'Evening'}
]
function MemberPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const callFunctionToOpenCloseAddMemberPopup = ()=>{
        dispatch(actionToOpenCloseAddMemberModalPopup(true));
    }

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
            <SubHeaderComponent name={"Member"}/>
            <IonContent className={"ion-padding theme_bg"}>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <div onClick={()=>callFunctionToOpenCloseAddMemberPopup()} className={"sub_heading heading_with_Action_button"}>
                                List
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 512 512" version="1.1"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="drop" fill="#ffffff" transform="translate(42.666667, 42.666667)"><path d="M213.333333,3.55271368e-14 C269.912851,3.55271368e-14 324.175019,22.4761259 364.18278,62.4838867 C404.190541,102.491647 426.666667,156.753816 426.666667,213.333333 C426.666667,331.15408 331.15408,426.666667 213.333333,426.666667 C95.5125867,426.666667 3.55271368e-14,331.15408 3.55271368e-14,213.333333 C3.55271368e-14,95.5125867 95.5125867,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.076736,42.6666667 42.6666667,119.076736 42.6666667,213.333333 C42.6666667,307.589931 119.076736,384 213.333333,384 C258.596948,384 302.006682,366.019099 334.012891,334.012891 C366.019099,302.006682 384,258.596948 384,213.333333 C384,119.076736 307.589931,42.6666667 213.333333,42.6666667 Z M234.666667,106.666667 L234.666,192 L320,192 L320,234.666667 L234.666,234.666 L234.666667,320 L192,320 L192,234.666 L106.666667,234.666667 L106.666667,192 L192,192 L192,106.666667 L234.666667,106.666667 Z" id="add-workorder"></path></g></g></svg>
                            </div>
                        </IonCol>
                        <IonCol className={"ion-text-right ion-align-items-center ion-justify-content-center"}>
                            <button onClick={()=>goToPage('/dashboard/all-members')} className={"sub_small_button"}>View all</button>
                        </IonCol>
                    </IonRow>
                </IonGrid>
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
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <div className={"sub_heading heading_with_Action_button"}>
                                Groups
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 512 512" version="1.1"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="drop" fill="#ffffff" transform="translate(42.666667, 42.666667)"><path d="M213.333333,3.55271368e-14 C269.912851,3.55271368e-14 324.175019,22.4761259 364.18278,62.4838867 C404.190541,102.491647 426.666667,156.753816 426.666667,213.333333 C426.666667,331.15408 331.15408,426.666667 213.333333,426.666667 C95.5125867,426.666667 3.55271368e-14,331.15408 3.55271368e-14,213.333333 C3.55271368e-14,95.5125867 95.5125867,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.076736,42.6666667 42.6666667,119.076736 42.6666667,213.333333 C42.6666667,307.589931 119.076736,384 213.333333,384 C258.596948,384 302.006682,366.019099 334.012891,334.012891 C366.019099,302.006682 384,258.596948 384,213.333333 C384,119.076736 307.589931,42.6666667 213.333333,42.6666667 Z M234.666667,106.666667 L234.666,192 L320,192 L320,234.666667 L234.666,234.666 L234.666667,320 L192,320 L192,234.666 L106.666667,234.666667 L106.666667,192 L192,192 L192,106.666667 L234.666667,106.666667 Z" id="add-workorder"></path></g></g></svg>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid className={"user_list_grid main_text"}>
                    {(groupArrayList?.map((group) => (
                        <div key={group?.id} className={"user_list_row dashboard_widgets_container"}>
                            <div className={"ion-text-left"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="22px" viewBox="0 0 512 512"><path d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"/></svg>
                            </div>
                            <div className={"ion-text-left member_detail_text"}>
                                {group?.name}
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

export default MemberPage;