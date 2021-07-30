import React, { useState } from "react";
import {
  IonList,
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
import Cardcontent from "./Cardcontent";
import ModalHeader from "./ModalHeader";
import AddContent from "./AddContent";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../slices/cardSlice";

const CardsList = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [cid, setCid] = useState("");
  //const history = useHistory();
  const dispatch = useDispatch();
  const wordCards = useSelector((state) => state.cards);
  console.log(wordCards);

  const ActionSheet = () => {
    console.log("#####");
    console.log(cid);
    return (
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[
          {
            text: "Delete",
            role: "destructive",
            icon: trash,
            handler: () => {
              dispatch(deleteCard({cid}));
            },
          },
          {
            text: "単語帳を見る",
            icon: caretForwardCircle,
            handler: () => {
              window.location.href = `/tab1/words/${cid}`;
            },
          },

          {
            text: "単語を追加",
            icon: caretForwardCircle,
            handler: () => {
              window.location.href = `/tab1/add/${cid}`;
            },
          },

          {
            text: "単語テストをする",
            icon: caretForwardCircle,
            handler: () => {
              window.location.href = `/ready/${cid}`;
            },
          },

          {
            text: "キャンセル",
            role: "cancel",
            icon: close,
          },
        ]}
      ></IonActionSheet>
    );
  };

  const showAct = (tid) => {
    setCid(tid);
    console.log("$$$$$$$$$$$$$");
    console.log(cid);
    setShowActionSheet(true);
    console.log(cid);
  };

  return (
    <div>
      <IonList>
        {wordCards.card.map((data, index) => {
          console.log(index);
          return (
            <IonItem onClick={() => showAct(data.id)}>
              <IonCardHeader>
                <IonCardTitle>{data.title}</IonCardTitle>
              </IonCardHeader>
            </IonItem>
          );
        })}
      </IonList>
      <ActionSheet />
    </div>
  );
};

export default CardsList;
