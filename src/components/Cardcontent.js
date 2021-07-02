import React, { useState } from "react";
import {
  IonFab,
  IonItem,
  IonIcon,
  IonLabel,
  IonSlides,
  IonSlide,
  IonContent,
  IonCard,
  IonModal,
  IonButton,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonFabButton,
} from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import ModalHeader from "./ModalHeader";
import Addbutton from "./Addbutton";

const SlideOpts = {
  initialSlide: 0,
  speed: 500,
};

const Cardcontent = () => {
  const cl = () => {
    console.log("fdfas");
    const newWord = [...array];
    newWord.push("moko");
    setArray(newWord);
    console.log(array);
  };

  const [array, setArray] = useState(["int", "string", "float", "mod"]);
  return (
    <IonSlides
      options={SlideOpts}
      pager={true}
      style={{ bottom: "15%", height: "70%", width: "90%" }}
    >
      {array.map((i) => {
        return (
          <IonSlide key={i}>
            <IonCard style={{ width: "90%", height: "70%" }}>
              <IonCardContent>
                <h1>{i}</h1>
                <p>
                  <br />
                </p>
                <h2>yaku</h2>
              </IonCardContent>
            </IonCard>
          </IonSlide>
        );
      })}
    </IonSlides>
  );
};

export default Cardcontent;
