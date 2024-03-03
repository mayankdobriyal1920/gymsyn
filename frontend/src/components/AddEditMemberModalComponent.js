import React, {useState} from "react";
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
                <IonGrid className={"main_form_container_section add_member"}>
                    <IonRow>
                        <IonCol>
                            <input className={"form_input_section input"}
                                   onChange={(e)=>setName(e.target.value)}
                                   value={name}
                                   placeholder={"Full Name"} type={"text"}/>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <input className={"form_input_section input"}
                                   onChange={(e)=>setPhone(e.target.value)}
                                   value={phone}
                                   placeholder={"Mobile Number"} type={"text"}/>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <textarea className={"form_input_section textarea"}
                                      onChange={(e)=>setAddress(e.target.value)}
                                      value={address}
                                      placeholder={"Address"}/>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <select className={"form_input_section select"} value={gender} onChange={(e)=>setGender(e.target.value)}>
                                <option value={'male'}>
                                    Male
                                </option>
                                <option value={'female'}>
                                    Female
                                </option>
                            </select>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <select className={"form_input_section select"} value={group} onChange={(e)=>setGroup(e.target.value)}>
                                <option value={'morning'}>
                                    Morning
                                </option>
                                <option value={'evening'}>
                                    Evening
                                </option>
                            </select>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <button className={"signup_button_main_form"}>
                                Add Member
                            </button>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>
    )
}