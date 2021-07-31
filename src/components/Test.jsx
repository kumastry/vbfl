import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonLabel,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonProgressBar,
  IonButtons,
  IonButton,
  IonIcon,
  IonAlert,
} from "@ionic/react";
import { useSelector } from "react-redux";
import { chevronBack } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router";

const Test = ({ match }) => {
  // localStorage.clear();
  // redux系準備
  const Id = match.params.cardId;
  const WS = useSelector((state) => state.cards.card);
  const Words = WS.find((data) => data.id === Id);

  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const handleLink = (path) => history.push(path);

  const wordCardsLength = Words.content.length;
  const reversed = false;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>test</IonTitle>
          <IonButtons slot="start">
            <IonButton
              type="button"
              color="danger"
              onClick={() => setShowModal(true)}
            >
              <IonIcon icon={chevronBack} />
              やめる
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">test</IonTitle>
          </IonToolbar>
        </IonHeader>
        {Words.content.map((word, index) => {
          return (
            <IonCard key={index}>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>
                    {`${index + 1} / ${wordCardsLength}`}
                  </IonCardSubtitle>
                  <IonCardTitle>
                    {reversed ? word.translate : word.word}
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
              <IonGrid>
                <IonRow>
                  <IonCol offset-4>
                    <IonCard>
                      <IonLabel>1.</IonLabel>
                      <IonCardContent>中身</IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol offset-4>
                    <IonCard>
                      <IonLabel>2.</IonLabel>
                      <IonCardContent>中身</IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol offset-4>
                    <IonCard>
                      <IonLabel>3.</IonLabel>
                      <IonCardContent>中身</IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol offset-4>
                    <IonCard>
                      <IonLabel>4.</IonLabel>
                      <IonCardContent>中身</IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>
          );
        })}
        <IonProgressBar value={1}></IonProgressBar>
        <IonAlert
          isOpen={showModal}
          onDidDismiss={() => setShowModal(false)}
          cssClass="my-custom-class"
          message={"今回の結果は保存されません。本当にやめますか？"}
          buttons={[
            {
              text: "キャンセル",
              role: "cancel",
            },
            {
              text: "OK",
              handler: () => handleLink("/"),
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Test;
