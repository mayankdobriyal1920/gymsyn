import React,{useState,useEffect} from 'react';
import {IonCol, IonContent, IonPage, IonRow} from "@ionic/react";
import logoWithoutText from "../theme/images/logo-icon-dark-100.png";
import {countries as countriesList} from 'countries-list';
import {useHistory} from "react-router-dom";

export default function SignupPage(){
    const history = useHistory();
    const goToPage = (page) =>{
        history.replace(page);
    }
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(
        {
            code: "IN",
            mobileCode: 91,
            name: "India"
        }
    );
    useEffect(() => {
        // Convert the countries object into an array
        const countriesArray = Object.entries(countriesList).map(([code, details]) => ({
            code,
            name: details.name,
            mobileCode: details.phone[0],
        }));

        setCountries(countriesArray);
    }, []);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <IonPage>
           <IonContent className={"top_padding"}>
            <div className={"signup_main_container_outer"}>
                <div className={"signup_main_container_inner"}>
                    {/*///////////// LOGO SLOGAN CONTAINER /////////////////////*/}
                    <div className={"main_logo_and_slogan_container_header"}>
                        <div className={"main_welcome_header_logo_section"}>
                            <img src={logoWithoutText} className={"logo"} alt={"logo"}/>
                        </div>
                        <div className={"welcome_slogan_container"}>
                            Welcome to <br></br>GymSyn
                            <p>Create your account</p>
                        </div>
                    </div>
                    {/*///////////// LOGO SLOGAN CONTAINER /////////////////////*/}
                    <div className={"main_form_container_section"}>
                        <IonRow>
                            <IonCol size={3}>
                                <select className={"form_input_section select"} value={selectedCountry.mobileCode} onChange={handleCountryChange}>
                                    {countries.map(country => (
                                        <option key={country.code} value={country.mobileCode}>
                                            +{country.mobileCode}
                                        </option>
                                    ))}
                                </select>
                            </IonCol>
                            <IonCol size={9}>
                                <input className={"form_input_section input"} placeholder={"Mobile Number"} type={"text"}/>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <input className={"form_input_section input"} placeholder={"Full Name"} type={"phone"}/>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <select className={"form_input_section input"} value={'member'}>
                                    <option value={'member'}>
                                        Member
                                    </option>
                                    <option value={'owner'}>
                                        Owner
                                    </option>
                                </select>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <button className={"signup_button_main_form"}>
                                    SignUp
                                </button>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <p>Already have an account? <a onClick={()=>goToPage('/login')}>Login</a></p>
                            </IonCol>
                        </IonRow>
                    </div>
                </div>
            </div>
        </IonContent>
        </IonPage>
    )
}