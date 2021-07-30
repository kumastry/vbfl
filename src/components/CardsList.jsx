import { useState } from "react";
import {
  IonList,
  IonItem,
  IonActionSheet,
  IonCardHeader,
  IonCardTitle,
  IonContent,
} from "@ionic/react";
import { trash, share, caretForwardCircle, heart, close } from "ionicons/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../slices/cardSlice";
import "../style/style.css";

const CardsList = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [cid, setCid] = useState("");
  //const history = useHistory();
  const dispatch = useDispatch();
  const wordCards = useSelector((state) => state.cards);
  const exist = wordCards.card.length ? true : false;

  const ActionSheet = () => {
    // console.log("#####");
    // console.log(cid);
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
              dispatch(deleteCard({ cid }));
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

  const list = () => {
    return (
      <>
        <IonList>
          {wordCards.card.map((data, index) => {
            return (
              <IonItem key={index} onClick={() => showAct(data.id)}>
                <IonCardHeader>
                  <IonCardTitle>{data.title}</IonCardTitle>
                </IonCardHeader>
              </IonItem>
            );
          })}
        </IonList>
        <ActionSheet />
      </>
    );
  };

  const none = () => {
    return (
      <div className="container">
        <p>右下のボタンから単語帳を登録してみよう！</p>
      </div>
    );
  };

  return (
    <>
      {exist ? list() : none()}
      {/* <IonList>
        {wordCards.card.map((data, index) => {
          return (
            <IonItem key={index} onClick={() => showAct(data.id)}>
              <IonCardHeader>
                <IonCardTitle>{data.title}</IonCardTitle>
              </IonCardHeader>
            </IonItem>
          );
        })}
      </IonList>
      <ActionSheet /> */}
    </>
  );
};

export default CardsList;
