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
  IonBackButton,
} from "@ionic/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Test = ({ match }) => {
  // localStorage.clear();
  // redux系準備
  const Id = match.params.cardId;
  const WS = useSelector((state) => state.cards.card);
  const Words = WS.find((data) => data.id === Id);
  const [curId, setcurId] = useState(0);
  const wordCardsLength = Words.content.length;

  const word = [];
  const translate = [];

  for (const item of Words.content) {
    word.push(item.word)
    translate.push(item.translate);
  }

  console.log(word);
  console.log(translate);

  const reversed = false;

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>test</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">test</IonTitle>
          </IonToolbar>
        </IonHeader>
     
            <IonCard key={curId}>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>
                    {`${curId + 1} / ${wordCardsLength}`}
                  </IonCardSubtitle>
                  <IonCardTitle>
                    {reversed ? translate[curId] : word[curId]}
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
              <IonGrid>
                <IonRow>
                  <IonCol offset-4>
                    <IonCard onClick = {() => setcurId(curId+1)}>
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
        <IonProgressBar value={1}></IonProgressBar>
      </IonContent>
    </IonPage>
  );
};

export default Test;
