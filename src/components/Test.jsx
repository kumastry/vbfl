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
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { chevronBack } from "ionicons/icons";
import { useHistory } from "react-router";

const shuffleArray = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const removeCorrect = ([...array], correctId) => {
  let removeId = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i]["translateId"] === correctId) {
      removeId = i;
      break;
    }
  }
  array.splice(removeId, 1);
  return array;
};

const Test = ({ match }) => {
  // localStorage.clear();
  // redux系準備
  const Id = match.params.cardId;
  const WS = useSelector((state) => state.cards.card);
  const Words = WS.find((data) => data.id === Id);
  const reversed = false;

  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const handleLink = (path) => history.push(path);

  const [curId, setcurId] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [alter, setAlter] = useState([]);
  const wordCardsLength = Words.content.length;

  const words = [];
  let translates = [];
  let translateId = 0;
  for (const item of Words.content) {
    words.push({ word: item.word, translate: item.translate, translateId });
    translates.push({ translateId, translate: item.translate });
    translateId++;
  }

  const ClickHander = (inputId, currentId) => {
    if (inputId === currentId) {
      setCorrect(correct + 1);
      alert(`正解，正解数: ${correct + 1}`);
    } else {
      alert("不正解");
    }
    setcurId(curId + 1);
  };

  useEffect(() => {
    if (curId < wordCardsLength) {
      let alternative = [];
      const transArray = removeCorrect(
        shuffleArray(translates),
        words[curId]["translateId"]
      );
      alternative.push({
        translateId: words[curId]["translateId"],
        translate: words[curId]["translate"],
      });
      for (let i = 0; i < 3; i++) {
        alternative.push({
          translateId: transArray[i]["translateId"],
          translate: transArray[i]["translate"],
        });
      }

      alternative = shuffleArray(alternative);
      setAlter(alternative);
    }
  }, [curId]);

  return (
    <IonPage>
      {(() => {
        if (curId < wordCardsLength) {
          return (
            <>
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
                <IonCard key={curId}>
                  <IonCard>
                    <IonCardHeader>
                      <IonCardSubtitle>
                        {`${curId + 1} / ${wordCardsLength}`}
                      </IonCardSubtitle>
                      <IonCardTitle>
                        {curId >= wordCardsLength
                          ? `正解数:  ${correct}`
                          : words[curId]["word"]}
                      </IonCardTitle>
                    </IonCardHeader>
                  </IonCard>

                  <IonGrid>
                    <IonRow>
                      <IonCol offset-4>
                        <IonCard
                          onClick={() =>
                            ClickHander(alter[0]["translateId"], curId)
                          }
                        >
                          <IonLabel>1.</IonLabel>
                          <IonCardContent>
                            {alter.length === 0
                              ? "loading..."
                              : alter[0]["translate"]}
                          </IonCardContent>
                        </IonCard>
                      </IonCol>

                      <IonCol offset-4>
                        <IonCard
                          onClick={() =>
                            ClickHander(alter[1]["translateId"], curId)
                          }
                        >
                          <IonLabel>2.</IonLabel>
                          <IonCardContent>
                            {alter.length === 0
                              ? "loading..."
                              : alter[1]["translate"]}
                          </IonCardContent>
                        </IonCard>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol offset-4>
                        <IonCard
                          onClick={() =>
                            ClickHander(alter[2]["translateId"], curId)
                          }
                        >
                          <IonLabel>3.</IonLabel>
                          <IonCardContent>
                            {alter.length === 0
                              ? "loading..."
                              : alter[2]["translate"]}
                          </IonCardContent>
                        </IonCard>
                      </IonCol>
                      <IonCol offset-4>
                        <IonCard
                          onClick={() =>
                            ClickHander(alter[3]["translateId"], curId)
                          }
                        >
                          <IonLabel>4.</IonLabel>
                          <IonCardContent>
                            {alter.length === 0
                              ? "loading..."
                              : alter[3]["translate"]}
                          </IonCardContent>
                        </IonCard>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCard>

                {/* <IonProgressBar value={1}></IonProgressBar> */}
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
            </>
          );
        } else {
          return (
            <>
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
                      おわる
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
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonCard>正解数{correct}</IonCard>
                    </IonCol>
                    <IonCol>
                      <IonCard>正解数{correct}</IonCard>
                    </IonCol>
                    <IonCol>
                      <IonCard>正解数{correct}</IonCard>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonContent>
              <IonAlert
                isOpen={showModal}
                onDidDismiss={() => setShowModal(false)}
                cssClass="my-custom-class"
                message={"単語帳選択画面に戻ります。よろしいですか？"}
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
            </>
          );
        }
      })()}
    </IonPage>
  );
};

export default Test;
