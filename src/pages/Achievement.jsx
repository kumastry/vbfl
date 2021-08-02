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
import { useState } from "react";
import { useSelector } from "react-redux";

const Achievement = () => {
  // localStorage.clear();
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const achievementList = useSelector(
    (state) => state.achievements.achievement
  );
  const splitList = () => {
    const tmp = [];
    let tmp3 = [];
    for (let i = 1; i <= achievementList.length; i++) {
      if (i % 3 !== 0) {
        tmp3.push(achievementList[i - 1]);
      } else {
        tmp3.push(achievementList[i - 1]);
        tmp.push(tmp3);
        tmp3 = [];
      }
    }
    if (tmp3.length > 0) tmp.push(tmp3);
    return tmp;
  };
  const list = splitList();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>実績一覧</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {list.map((set, rowIndex) => {
            return (
              <IonRow key={rowIndex}>
                {set.map((data, colIndex) => {
                  const info = data.info;
                  const name = info.achieved ? info.name : "???";
                  return (
                    <IonCol key={colIndex}>
                      <IonCard
                        onClick={() => {
                          if (!info.achieved) {
                            setMessage(info.hint);
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
