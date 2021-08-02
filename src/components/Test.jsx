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
  IonItem,
  IonInput,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chevronBack } from "ionicons/icons";
import { useHistory } from "react-router";
import { totalCollectCountUp } from "../slices/achievementSlice";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

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

let correctNumber = 0;

const Test = ({ match }) => {
  // localStorage.clear();
  // redux系準備
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const Id = match.params.cardId;
  const WS = useSelector((state) => state.cards.card);
  const Words = WS.find((data) => data.id === Id);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const [curId, setcurId] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [alter, setAlter] = useState([]);
  const wordCardsLength = Words.content.length;
  const words = [];
  let translates = [];
  let translateId = 0;

  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleLink = (path) => history.push(path);

  for (const item of Words.content) {
    words.push({ word: item.word, translate: item.translate, translateId });
    translates.push({ translateId, translate: item.translate });
    translateId++;
  }

  const AnswerAlert = ({ alert, msg }) => {
    return <IonAlert isOpen={alert} header={"結果"} message={msg} />;
  };

  const fourClickHander = (inputId, currentId) => {
    if (inputId === currentId) {
      setCorrect(correct + 1);
      setShowAlert1(true);
      setTimeout(() => {
        setShowAlert1(false);
        setcurId(curId + 1);
      }, 1000);
    } else {
      setShowAlert2(true);
      setTimeout(() => {
        setShowAlert2(false);
        setcurId(curId + 1);
      }, 1000);
    }
  };

  const inputClickHander = () => {
    if (inputText === words[curId]["translate"]) {
      setCorrect(correct + 1);
      setShowAlert1(true);
      setTimeout(() => {
        setShowAlert1(false);
        setcurId(curId + 1);
      }, 1000);
    } else {
      setShowAlert2(true);
      setTimeout(() => {
        setShowAlert2(false);
        setcurId(curId + 1);
      }, 1000);
    }
    setInputText("");
    setTimeout(() => {
      setShowAlert1(false);
      setcurId(curId + 1);
    }, 1000);
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
    } else {
      dispatch(totalCollectCountUp(correct));
      setData(
        { name: "Group A", value: correct },
        { name: "Group B", value: wordCardsLength - correct }
      );
    }
  }, [curId]);

  return (
    <IonPage>
      {(() => {
        if (Words.four) {
          if (curId < wordCardsLength) {
            return (
              <>
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>result</IonTitle>
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
                              fourClickHander(alter[0]["translateId"], curId)
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
                              fourClickHander(alter[1]["translateId"], curId)
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
                              fourClickHander(alter[2]["translateId"], curId)
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
                              fourClickHander(alter[3]["translateId"], curId)
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
                  <AnswerAlert
                    alert={showAlert1}
                    msg={`正解!! 正解数:${correct}`}
                  />
                  <AnswerAlert
                    alert={showAlert2}
                    msg={`不正解... 正解数:${correct}`}
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
                  <ResponsiveContainer width="50%" height="50%">
                    <PieChart width={100} height={100}>
                      <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        legendType="circle"
                        startAngle={450}
                        endAngle={90}
                        label
                      >
                        <Cell fill="#4169E1" />
                        <Cell fill="#ff4500" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
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
        } else {
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
                  <IonCard>
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
                    <IonCard>
                      <IonInput
                        value={inputText}
                        placeholder="解答を入力"
                        onIonChange={(e) => {
                          setInputText(e.target.value);
                        }}
                      />
                    </IonCard>
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
                  <AnswerAlert
                    alert={showAlert1}
                    msg={`正解!! 正解数:${correct}`}
                  />
                  <AnswerAlert
                    alert={showAlert2}
                    msg={`不正解... 正解数:${correct}`}
                  />
                </IonContent>
                <IonButton
                  className="ion-margin"
                  expand="block"
                  onClick={inputClickHander}
                >
                  awesome button!
                </IonButton>
              </>
            );
          } else {
            return (
              <>
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>result</IonTitle>
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
                  <ResponsiveContainer width="50%" height="50%">
                    <PieChart width={100} height={100}>
                      <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        legendType="circle"
                        startAngle={450}
                        endAngle={90}
                        label
                      >
                        <Cell fill="#4169E1" />
                        <Cell fill="#ff4500" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
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
        }
      })()}
    </IonPage>
  );
};

export default Test;
