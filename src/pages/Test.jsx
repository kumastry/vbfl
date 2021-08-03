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
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonProgressBar,
  IonButtons,
  IonButton,
  IonIcon,
  IonAlert,
  IonInput,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chevronBack } from "ionicons/icons";
import { useHistory } from "react-router";
import {
  totalCollectCountUp,
  continuousCountUp,
} from "../slices/achievementSlice";
import ResultSet from "../components/ResultSet";

// goooooooooooooooood!!!!!!
const shuffleArray = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// 単語解答後の処理
const switchWord = (setShowAlert, setCurId, curId) => {
  setShowAlert(true);
  setTimeout(() => {
    setShowAlert(false);
    setCurId(curId + 1);
  }, 1000);
};

const Test = ({ match }) => {
  // localStorage.clear();
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert3, setShowAlert3] = useState(false);

  const Id = match.params.cardId;
  const WS = useSelector((state) => state.cards.card);
  const Words = WS.find((data) => data.id === Id);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [curId, setcurId] = useState(0);
  const [correct, setCorrect] = useState(0);
  const wordCardsLength = Words.content.length;

  const [answerSet, setAnswerSet] = useState([]);
  const [wordsSet, setWordsSet] = useState(Words.content);
  const [selectSet, setSelectSet] = useState([]);

  const [inputText, setInputText] = useState("");

  const history = useHistory();
  const handleLink = (path) => history.push(path);

  const AnswerAlert = ({ alert, msg }) => {
    return <IonAlert isOpen={alert} header={"結果"} message={msg} />;
  };

  const fourex = () => {
    setShowAlert3(false);
    window.location.href = `ready/${Id}`;
  };

  const fourClickHander = (nowText, selectText) => {
    if (nowText === selectText) {
      setCorrect(correct + 1);
      dispatch(continuousCountUp(1));
      switchWord(setShowAlert1, setcurId, curId);
    } else {
      dispatch(continuousCountUp(-1));
      switchWord(setShowAlert2, setcurId, curId);
    }
  };

  const inputClickHander = (nowText) => {
    setInputText("");
    if (inputText === nowText) {
      setCorrect(correct + 1);
      dispatch(continuousCountUp(1));
      switchWord(setShowAlert1, setcurId, curId);
    } else {
      dispatch(continuousCountUp(-1));
      switchWord(setShowAlert2, setcurId, curId);
    }
  };

  // 初回のみrandomがtrueなら単語帳をシャッフル
  // 初回のみreverseがtureなら裏側を選択肢リストに入れる
  useEffect(() => {
    if (Words.random) {
      setWordsSet((prev) => shuffleArray(prev));
    }
    const tmp = [];
    for (const { word, translate } of Words.content) {
      tmp.push(Words.reverse ? word : translate);
    }
    setAnswerSet((prev) => [...prev, ...tmp]);
  }, []);

  useEffect(() => {
    if (curId < wordCardsLength) {
      if (Words.four) {
        if (wordCardsLength <= 3) {
          setShowAlert3(true);
        } else {
          const targetIndex = Math.floor(Math.random() * 3);
          const targetItem = Words.reverse
            ? wordsSet[curId]["word"]
            : wordsSet[curId]["translate"];
          const newSelectSet = shuffleArray(
            answerSet.filter((answer) => answer !== targetItem)
          )
            .slice(0, 4)
            .map((item, index) => (index === targetIndex ? targetItem : item));
          setSelectSet(newSelectSet);
        }
      }
    } else {
      dispatch(totalCollectCountUp(correct));
    }
  }, [curId, answerSet]);

  return (
    <IonPage>
      {(() => {
        if (Words.four) {
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
                          {Words.reverse
                            ? wordsSet[curId]["translate"]
                            : wordsSet[curId]["word"]}
                          {/* {curId >= wordCardsLength
                            ? `正解数:  ${correct}`
                            : words[curId]["word"]} */}
                        </IonCardTitle>
                      </IonCardHeader>
                    </IonCard>

                    <IonGrid>
                      <IonRow>
                        {selectSet.map((data, index) => {
                          // console.log(data);
                          return (
                            <IonCol key={index} size="6">
                              <IonCard
                                onClick={() =>
                                  fourClickHander(
                                    data,
                                    Words.reverse
                                      ? wordsSet[curId]["word"]
                                      : wordsSet[curId]["translate"]
                                  )
                                }
                              >
                                <IonCardSubtitle
                                  style={{ padding: "8px" }}
                                >{` ${index + 1}.`}</IonCardSubtitle>
                                <IonCardTitle style={{ padding: "8px" }}>
                                  {answerSet.length === 0 ? "loading..." : data}
                                </IonCardTitle>
                              </IonCard>
                            </IonCol>
                          );
                        })}
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

                  <IonAlert
                    isOpen={showAlert3}
                    onDidDismiss={fourex}
                    header={""}
                    message={"単語帳を4つ以上追加してください"}
                    buttons={[
                      {
                        text: "戻る",
                        handler: () => {
                          window.location.href = `ready/${Id}`;
                        },
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

                <ResultSet
                  correct={correct}
                  wordCardsLength={wordCardsLength}
                />
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
                            : Words.reverse
                            ? wordsSet[curId]["translate"]
                            : wordsSet[curId]["word"]}
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
                  onClick={() => {
                    inputClickHander(
                      Words.reverse
                        ? wordsSet[curId]["word"]
                        : wordsSet[curId]["translate"]
                    );
                  }}
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
                <ResultSet
                  correct={correct}
                  wordCardsLength={wordCardsLength}
                />
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
