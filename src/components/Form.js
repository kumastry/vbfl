import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';

export const Form = () => {

  const [text, setText] = useState();
  const [number, setNumber] = useState();

  return (
      <IonCard>
          <IonCardContent>
          <IonItem>
          
            <IonInput value={text} placeholder="Enter Input" ></IonInput>

          </IonItem>

          <IonItemDivider>Textarea in an item with a placeholder</IonItemDivider>
          <IonItem>
            <IonTextarea placeholder="Enter more information here..." value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>

          </IonCardContent>
      </IonCard>
  );
};