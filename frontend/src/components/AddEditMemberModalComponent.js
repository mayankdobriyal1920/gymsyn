import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    IonButton,
    IonButtons, IonCol,
    IonContent, IonGrid,
    IonHeader,
    IonMenuButton,
    IonModal, IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {actionToOpenCloseAddMemberModalPopup} from "../store/reducers/add.member.modal.slice";
import {useHistory} from "react-router-dom";
import {App} from "@capacitor/app";
import {Capacitor} from "@capacitor/core";

let backButtonListener = null;
export default function AddEditMemberModalComponent(){
    const {isOpen,dropdownData} = useSelector((state)=>state.addMemberModal);
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
    const [gender,setGender] = useState('male');
    const [group,setGroup] = useState('morning');
    const callFunctionToCloseModal = ()=>{
        dispatch(actionToOpenCloseAddMemberModalPopup(false));
    }

    useEffect(() => {
        const handleBackButton = ()=>{
            callFunctionToCloseModal();
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
                    backButtonListener.remove();
            }
        };
    }, [isOpen]);

    return (
        <IonModal
            isOpen={isOpen}
            breakpoints={[0.7,1,0]}
            initialBreakpoint={0.7}
            className={"sheet_ion_modal"}
            onIonModalDidDismiss={callFunctionToCloseModal}>
            <IonHeader>
                <IonToolbar className={"theme_modal_bg_color"}>
                    <IonTitle className={"ion-text-center main_text"}>{dropdownData?.id ? 'Edit' : 'Add'} Member</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className={"theme_modal_bg_color"}>
                <div className={"main_form_container_section add_member"}>
                    <IonRow>
                        <IonCol>
                            <div className="input-group floating_input_section">
                                <input className={"form_input_section_floating"}
                                       onChange={(e) => setName(e.target.value)}
                                       value={name}
                                       type={"text"}/>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Full Name</label>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <div className="input-group floating_input_section">
                                <input className={"form_input_section_floating"}
                                       onChange={(e) => setPhone(e.target.value)}
                                       value={phone}
                                       type={"text"}/>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Mobile Number</label>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <div className="input-group floating_input_section">
                                    <input type={"text"} className={"form_input_section_floating"}
                                              onChange={(e) => setAddress(e.target.value)}
                                              value={address}
                                    />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Address</label>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <div className="input-group floating_input_section">
                                <select className={"form_input_section_floating"} value={gender}
                                        onChange={(e) => setGender(e.target.value)}>
                                    <option value={'male'}>
                                        Male
                                    </option>
                                    <option value={'female'}>
                                        Female
                                    </option>
                                </select>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Gender</label>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <div className="input-group floating_input_section">
                                <select className={"form_input_section_floating"} value={group}
                                        onChange={(e) => setGroup(e.target.value)}>
                                    <option value={'morning'}>
                                        Morning
                                    </option>
                                    <option value={'evening'}>
                                        Evening
                                    </option>
                                </select>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Group</label>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <button className={"signup_button_main_form"}>
                                Add Member
                            </button>
                        </IonCol>
                    </IonRow>
                </div>
            </IonContent>
        </IonModal>
    )
}