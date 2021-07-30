import {
  IonSlides,
  IonSlide,
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { useSelector } from "react-redux";

const SlideOpts = {
  initialSlide: 0,
  speed: 500,
};

const Cardcontent = ({ match }) => {
  const Id = match.params.cardId;
  const WS = useSelector((state) => state.cards.card);
  let Words = WS.find((data) => data.id === Id);

  if (typeof Words === "undefined") {
    Words = {
      id: "0",
      title: "no",
      content: [{ word: "ddd", translate: "333" }],
    };
  } else if (Words.content.length === 0) {
    Words = {
      id: "0",
      title: "no",
      content: [{ word: "add word", translate: "単語を追加してください" }],
    };
  }
  console.log(Words);

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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{Words.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSlides
          options={SlideOpts}
          pager={true}
          style={{ height: "70%", width: "90%" }}
        >
          {Words.content.map((data, index) => {
            return (
              <IonSlide key={index}>
                <IonCard
                  style={{ width: "90%", height: "70%" }}
                  onClick={() => alert("###")}
                >
                  <IonCardContent>
                    <h1 style={{ fontSize: 35, textAlign: "center" }}>
                      {data.word}
                    </h1>
                    <p>
                      <br />
                    </p>
                    <h2 style={{ fontSize: 20 }}>{data.translate}</h2>
                  </IonCardContent>
                </IonCard>
              </IonSlide>
            );
          })}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Cardcontent;
