import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonCardHeader,
  IonCardTitle,
  useIonViewDidEnter,
} from "@ionic/react";
import { useEffect, useState } from "react";
import Ready from "../components/Ready";
import { Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

const Quiz = () => {
  const [wordCards, setWordCards] = useState([]);
  const [four, setFour] = useState(false); // toggleをdisableにするためのstate

  useIonViewDidEnter(() => {
    const targetKey = "array";
    if (targetKey in localStorage) {
      const saveDate = JSON.parse(localStorage[targetKey]);
      setWordCards([...saveDate]);
    }
  });
  // localStorage.clear();
  // console.log(localStorage);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">クイズ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">クイズ</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/*<ExploreContainer name="Tab 2 page" />*/}
        <IonList>
          {wordCards.map((content, key) => {
            return (
              <IonItem key={key} routerLink={`/quiz/ready/${key}`}>
                <IonCardHeader>
                  <IonCardTitle>{content.title}</IonCardTitle>
                </IonCardHeader>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Quiz;
