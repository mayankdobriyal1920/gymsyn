import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IonCol, IonContent, IonPage, IonRow} from "@ionic/react";
import {countries as countriesList} from 'countries-list';
import {actionToAddNewUserGymDetailData} from "../store/reducers/user.slice";
import {useHistory} from "react-router-dom";
import {App} from "@capacitor/app";
import {Capacitor} from "@capacitor/core";

let backButtonListener = null;
export default function AddNewGymComponent(){
    const {userInfo} = useSelector((state)=>state.userSignIn);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('India');
    const dispatch = useDispatch();
    const history = useHistory();
    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const callFunctionToAddNewGymData = ()=>{
        dispatch(actionToAddNewUserGymDetailData());
    }

    useEffect(() => {
        // Convert the countries object into an array
        const countriesArray = Object.entries(countriesList).map(([code,details]) => (details.name));
        setCountries(countriesArray);
    }, []);

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
                backButtonListener?.remove();
            }
        };
    }, []);

    return (
        <IonPage>
          <IonContent className={"theme_bg add_new_gym_content"}>
            <div className={"header_main_section"}>
                <div className={"heading"}>Hi {userInfo?.name}!</div>
                <div className={"main_text"}>Add your gym details to continue using GymSync.</div>
            </div>
            <div className={"main_form_container_section add_gym"}>
                <IonRow>
                    <IonCol>
                        <input className={"form_input_section input"} placeholder={"Gym name"} type={"text"}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <select className={"form_input_section select"} value={selectedCountry} onChange={handleCountryChange}>
                            {countries.map(country => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <textarea className={"form_input_section textarea"} placeholder={"Gym address"}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <button onClick={()=>callFunctionToAddNewGymData()} className={"signup_button_main_form"}>
                            Continue
                        </button>
                    </IonCol>
                </IonRow>
            </div>
        </IonContent>
        </IonPage>
    )
}