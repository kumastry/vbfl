import React, { useState } from "react";
import {
  IonItem,
  IonActionSheet,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonModal,
  IonContent,
} from "@ionic/react";
import { trash, share, caretForwardCircle, heart, close } from "ionicons/icons";
import Cardcontent from "../pages/Cardcontent";
import ModalHeader from "./ModalHeader";
import AddContent from "../pages/AddContent";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const Card = (props) => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <div>
      <IonItem onClick={() => setShowActionSheet(true)}>
        <IonCardHeader>
          <IonCardTitle>{props.cardContent.title}</IonCardTitle>
        </IonCardHeader>

        <IonCardHeader>
          <IonCardTitle>{props.cardContent["title"]}</IonCardTitle>
        </IonCardHeader>

        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          buttons={[
            {
              text: "Delete",
              role: "destructive",
              icon: trash,
              handler: () => {
                console.log(props.idx);
                props.deleteCard(props.idx);
              },
            },
            {
              text: "単語帳を見る",
              icon: caretForwardCircle,
              handler: () => {
                window.location.href = "/tab1/words";
              },
            },

            {
              text: "単語を追加",
              icon: caretForwardCircle,
              handler: () => {
                window.location.href = "/tab1/add";
              },
            },
            {
              text: "キャンセル",
              role: "cancel",
              icon: close,
            },
          ]}
        />
      </IonItem>
    </div>
  );
};

export default Card;
