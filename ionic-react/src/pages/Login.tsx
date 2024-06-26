import { IonContent, IonText, IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

import { Plugins } from '@capacitor/core';
// import "@codetrix-studio/capacitor-google-auth";
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth'

const INITIAL_STATE = {};

const Login: React.FC = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const history = useHistory();

  useEffect(() => {
    console.log("GINIT")
    GoogleAuth.initialize({
        clientId: '428834245608-umhcaoa8irk46m0h668r97o0qe8sek18.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
        grantOfflineAccess: true,
      })
    //   GoogleAuth.initialize()
  }, [])

  const signIn = async () => {
    try {
      const result = await GoogleAuth.signIn();
      console.info('result', result);
      if (result) {
        history.push({
          pathname: '/home',
          state: result
        });
      }
    } catch (error) {
      console.error('Google sign-in error', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Ionic React App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonRow>
          <IonCol className="text-center">
            <IonImg className="title-img" src="assets/capacitor.png" ></IonImg>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="text-center">
            <IonText className="title">
              Google Login in Capacitor app
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="text-center">
            <IonText className="text-center">
              By Enappd Team
            </IonText>
          </IonCol>
        </IonRow>

        <IonButton className="login-button" onClick={signIn} expand="block" fill="solid" color="danger">
          Login with Google
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;