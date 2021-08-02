import { useState } from "react";
import {
  IonPage,
  IonToggle,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonLabel,
  IonItem,
  useIonViewWillEnter,
  IonButton,
  useIonViewDidLeave,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { useSelector } from "react-redux";
const Ready = ({ match }) => {
  const Id = match.params.cardId;
  const WS = useSelector((state) => state.cards.card);
  const Words = WS.find((data) => data.id === Id);

  // 改良の必要あり
  const [random, setRandom] = useState(Words.type.random);
  const [four, setFour] = useState(Words.type.four);
  const [strict, setStrict] = useState(Words.type.strict);
  const [reverse, setReverse] = useState(Words.type.reverse);
  // const [wordCards, setWordCards] = useState([]);
  // useIonViewWillEnter(() => {
  //   const targetKey = "array";
  //   if (targetKey in localStorage) {
  //     const saveDate = JSON.parse(localStorage[targetKey]);
  //     setWordCards([...saveDate]);
  //   }
  //   // console.log("hello");
  // });
  // // console.log(wordCards);
  // // if (!(wordCards.length > 0)) {
  // //   return null;
  // // }

  useIonViewDidLeave(() => {
    Words.type.random = random;
    Words.type.four = four;
    Words.type.strict = strict;
    Words.type.reverse = reverse;
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{Words.title}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{Words.title}</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonCard>
          <IonItem>
            <IonLabel>
              <h2>ランダムに出題</h2>
              <p>単語帳の並びをランダムにします。</p>
            </IonLabel>
            <IonToggle
              value={random}
              onIonChange={(e) => setRandom(e.detail.checked)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>
              <h2>問題を四択にする</h2>
              <p>入力形式から選択形式にします。</p>
            </IonLabel>
            <IonToggle
              value={four}
              onIonChange={(e) => setFour(e.detail.checked)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>
              <h2>strictモードにする</h2>
              <p>文字列が完全に一致しているとき正解になります。</p>
            </IonLabel>
            <IonToggle
              disabled={four}
              value={strict}
              onIonChange={(e) => setStrict(e.detail.checked)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>
              <h2>単語を裏返す</h2>
              <p>単語帳の訳を表にします。</p>
            </IonLabel>
            <IonToggle
              value={reverse}
              onIonChange={(e) => setReverse(e.detail.checked)}
            />
          </IonItem>
        </IonCard>
      </IonContent>
      <IonButton
        className="ion-margin"
        expand="block"
        routerLink={`/test/${Id}`}
      >
        単語テストを始める
      </IonButton>
    </IonPage>
  );
};

export default Ready;
