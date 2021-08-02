import {
  IonActionSheet,
  IonSlides,
  IonSlide,
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { useSelector } from "react-redux";
import {useLongPress } from 'use-long-press';
import React, { useState, useCallback } from 'react';

const SlideOpts = {
  initialSlide: 0,
  speed: 500,
};

const Cardcontent = ({ match }) => {
  const Id = match.params.cardId;
  const WS = useSelector((state) => state.cards.card);
  let Words = WS.find((data) => data.id === Id);
  const callback = useCallback(event => {
    setShowActionSheet(true);
  }, []);
  const [enabled, setEnabled] = useState(true);

  const [showActionSheet, setShowActionSheet] = useState(false);

  const bind = useLongPress(enabled ? callback : null, {
  
    threshold: 300,
    captureEvent: true,
    cancelOnMovement: false,
    detect: 'both',
  });

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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle >{Words.title}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{Words.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSlides
          options={SlideOpts}
          pager={true}
          style={{ height: "70%", width: "90%" }}
        >
          {Words.content.map((data, index) => {
            return (
              <IonSlide key={index}>
                <IonCard
                  style={{ width: "90%", height: "70%" }}
                  
                  {...bind}
                >
                  <IonCardContent>
                    <h1 style={{ fontSize: 35, textAlign: "center" }}>
                      {data.word}
                    </h1>
                    <p>
                      <br />
                    </p>
                    <h2 style={{ fontSize: 20 }}>{data.translate}</h2>
                  </IonCardContent>
                </IonCard>
              </IonSlide>
            );
          })}
        </IonSlides>

        <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        cssClass='my-custom-class'
        buttons={[{
          text: '単語を変更する',
          role: 'destructive',
          
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: '単語を消す',
          
          handler: () => {
            console.log('Share clicked');
          }
        }]}
      >
      </IonActionSheet>

      </IonContent>
    </IonPage>
  );
};

export default Cardcontent;
