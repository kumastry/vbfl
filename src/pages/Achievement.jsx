import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonAlert,
} from "@ionic/react";
import { useState, useEffect } from "react";

const Achievement = ({ match }) => {
  const data = [
    [
      {
        name: "10問連続正解",
        achieved: false,
        hint: "問題を正解し続ける",
      },
      {
        name: "30問連続正解",
        achieved: false,
        hint: "問題を正解し続ける",
      },
      {
        name: "50問連続正解",
        achieved: false,
        hint: "問題を正解し続ける",
      },
    ],
    [
      {
        name: "10問連続正解",
        achieved: false,
        hint: "問題を正解し続ける",
      },
      {
        name: "30問連続正解",
        achieved: true,
        hint: "問題を正解し続ける",
      },
      {
        name: "50問連続正解",
        achieved: false,
        hint: "問題を正解し続ける",
      },
    ],
    [
      {
        name: "10問連続正解",
        achieved: false,
        hint: "問題を正解し続ける",
      },
      {
        name: "30問連続正解",
        achieved: false,
        hint: "問題を正解し続ける",
      },
      {
        name: "50問連続正解",
        achieved: false,
        hint: "問題を正解し続ける",
      },
    ],
  ];

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  // useEffect(() => {

  // }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>実績一覧</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {data.map((set, rowIndex) => {
            return (
              <IonRow key={rowIndex}>
                {set.map((data, colIndex) => {
                  const name = data.achieved ? data.name : "???";
                  return (
                    <IonCol key={colIndex}>
                      <IonCard
                        onClick={() => {
                          if (!data.achieved) {
                            setMessage(data.hint);
                            setShowModal(true);
                          }
                        }}
                      >
                        <IonCardContent>{name}</IonCardContent>
                      </IonCard>
                    </IonCol>
                  );
                })}
              </IonRow>
            );
          })}
        </IonGrid>
      </IonContent>
      <IonAlert
        isOpen={showModal}
        onDidDismiss={() => setShowModal(false)}
        cssClass="my-custom-class"
        header={"実績解除のヒント"}
        message={message}
        buttons={[
          {
            text: "もどる",
            role: "cancel",
          },
        ]}
      />
    </IonPage>
  );
};

export default Achievement;
