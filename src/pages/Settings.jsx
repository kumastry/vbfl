import {
  IonLabel,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCard,
  IonToggle,
  IonList,
  IonItem,
  IonIcon
} from "@ionic/react";
import Ready from "./Ready";
import { Route } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAchivement } from "../slices/achievementSlice";
import { moon } from "ionicons/icons";

const Settings = () => {
  // localStorage.clear();
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };
  const dispatch = useDispatch();
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
              {/* <IonCard
                onClick={() => {
                  dispatch(
                    changeAchieved({
                      cnt: 1,
                      type: "collect",
                    })
                  );
                }}
              >
                <IonLabel>
                  <h1>単語帳の名前</h1>
                  <p>item数</p>
                </IonLabel>
              </IonCard> */}
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
        <IonList className="ion-margin-top">
          <IonItem>
            <IonIcon slot="start" icon={moon} />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle
              slot="end"
              name="darkMode"
              onIonChange={toggleDarkModeHandler}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
