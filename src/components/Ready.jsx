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
} from "@ionic/react";
import { useLocation } from "react-router";

const Ready = () => {
  const location = useLocation();
  const [four, setFour] = useState(false); // toggleをdisableにするためのstate
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>unko</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">unko</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/*<ExploreContainer name="Tab 2 page" />*/}
        <IonCard>
          <IonItem>
            <IonLabel>
              <h2>ランダムに出題</h2>
              <p>単語帳の並びをランダムにします。</p>
            </IonLabel>
            <IonToggle value="randam" value="randam" />
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
            <IonToggle disabled={four} value="strict" />
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Ready;
