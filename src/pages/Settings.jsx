import { IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonCard } from '@ionic/react';
import Ready from "../components/Ready";
import { Route } from 'react-router-dom';
import { useState } from 'react';

const Settings = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>設定</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">設定</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
        <ion-row>
        <ion-col>
        <IonCard>
        <IonLabel>
        <h1>単語帳の名前</h1>
        <p>item数</p>
        </IonLabel>
        </IonCard>

        </ion-col>
        <ion-col>
        <IonCard>
        <IonLabel>
        <h1>単語帳の名前</h1>
        <p>item数</p>
        </IonLabel>
        </IonCard>
        </ion-col>
      </ion-row>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Settings;  