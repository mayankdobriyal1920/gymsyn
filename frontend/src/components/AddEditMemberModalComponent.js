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
            breakpoints={[0.7,1]}
            initialBreakpoint={0.7}
            className={"sheet_ion_modal"}
            onIonModalDidDismiss={callFunctionToCloseModal}>
            <IonHeader>
                <IonToolbar className={"theme_modal_bg_color"}>
                    <IonButtons slot="end">
                        <IonButton onClick={callFunctionToCloseModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 24 24" fill="none"><path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#ffffff"/></svg>
                        </IonButton>
                    </IonButtons>
                    <IonTitle className={"ion-text-center sub_heading"}>{dropdownData?.id ? 'Edit' : 'Add'} Member</IonTitle>
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