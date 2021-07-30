import React, { useState } from "react";
import {
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
import { useSelector } from "react-redux";

const SlideOpts = {
  initialSlide: 0,
  speed: 500,
};

const Cardcontent = ({ match }) => {
  const Id = match.params.cardId;
  const WS = useSelector((state) => state.cards.card);
  let Words = WS.find((data) => data.id === Id);

  
  if (typeof Words === "undefined") {
    Words = {
      id: "0",
      title: "no",
      content: [{ word: "ddd", translate: "333" }],
    };
  } else if (Words.content.length === 0) {
    Words = {
      id: "0",
      title: "no",
      content: [{ word: "add word", translate: "単語を追加してください" }],
    };
  }
  console.log(Words);

  return (
    <IonSlides
      options={SlideOpts}
      pager={true}
      style={{ height: "70%", width: "90%" }}
    >
      {Words.content.map((data) => {
        return (
          <IonSlide>
            <IonCard style={{ width: "90%", height: "70%" }} onClick = {() => (alert("###"))}>
              <IonCardContent>
                <h1 style={{fontSize:35, textAlign:"center"}}>{data.word}</h1>
                <p>
                  <br />
                </p>
                <h2 style={{fontSize:20}}>{data.translate}</h2>
              </IonCardContent>
            </IonCard>
          </IonSlide>
        );
      })}
    </IonSlides>
  );
};

export default Cardcontent;
