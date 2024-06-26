import { IonContent, IonText, IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import { Plugins } from '@capacitor/core';
import "@codetrix-studio/capacitor-google-auth";

const INITIAL_STATE = {
  loggedIn: true,
  user: {}
};

const Home: React.FC = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const history = useHistory();
  const location = useLocation<any>();

  useEffect(() => {
    getUserInfo();
  }, []);

  const signOut = async (): Promise<void> => {
    await Plugins.GoogleAuth.signOut();
    history.goBack();
  };

  const getUserInfo = () => {
    setState({
      ...state,
      user: {
        name: location.state.name,
        image: location.state.image,
        email: location.state.email
      }
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Logged in ... </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonRow>
          <IonCol className="text-center">
            <IonText className="title">
              You are logged in!
            </IonText>
          </IonCol>
        </IonRow>

        <IonButton className="login-button" onClick={signOut} expand="full" fill="solid" color="danger">
          Logout from Google
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;