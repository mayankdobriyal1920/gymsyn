import React from 'react';
import {IonApp, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {isLogin} from "./middlewear/auth";
import PublicRoutes from "./routing/PublicRoutes";
import PrivateRoutes from "./routing/PrivateRoutes";
import {useSelector} from "react-redux";

setupIonicReact();

const App = () => {
    const {userInfo} = useSelector((state)=>state.userSignIn);
    return (
        <IonApp>
            {(userInfo?.id) ? <PrivateRoutes/> : <PublicRoutes/>}
        </IonApp>
    );
}

export default App;
