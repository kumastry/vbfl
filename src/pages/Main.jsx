import { IonContent, IonList, IonPage, IonAlert, IonItem } from "@ionic/react";
import Addbutton from "../components/Addbutton";
import Card from "../components/Card";
import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addCard } from "../slices/cardSlice";
import CardsList from "../components/CardsList";

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const dispatchCard = (title) => {
    console.log("FFF");

    if (title.length > 0) {
      console.log(title);
      dispatch(
        addCard({
          id: nanoid(),
          title,
          content: [],
        })
      );
    }
  };

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <IonPage>
      <Header />
      <IonContent>
        <CardsList />

        <IonAlert
          isOpen={showModal}
          onDidDismiss={() => setShowModal(false)}
          cssClass="my-custom-class"
          header={"単語帳を新たに追加"}
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "名前",
            },
          ]}
          buttons={[
            {
              text: "キャンセル",
              role: "cancel",
            },
            {
              text: "OK",
              handler: (data) => dispatchCard(data.name),
            },
          ]}
        />
        <Addbutton handleClick={handleClick} />
      </IonContent>
    </IonPage>
  );
};

export default MainPage;
