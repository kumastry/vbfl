import { IonContent, IonList, IonPage, IonAlert, IonItem } from "@ionic/react";
import Addbutton from "../components/Addbutton";
import Card from "../components/Card";
import Header from "../components/Header";
import React, { useState, useEffect } from "react";

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [wordCards, setWordCards] = useState([]);

  const handleClick = () => {
    setShowModal(true);
  };

  const deleteCard = (i) => {
    console.log(i);
    const tmp = [...wordCards];
    tmp.splice(i, 1);
    setWordCards(tmp);
  };

  const addWord = (word, key) => {
    //word = {word:string, translate:string}
    const tmp = wordCards.slice(0, wordCards.length);
    tmp[key]["wordcnt"].push(word);
  };

  useEffect(() => {
    if (localStorage.array) {
      console.log(localStorage.array);
      const saveDate = JSON.parse(localStorage.array);
      setWordCards(saveDate);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(wordCards));
  }, [wordCards]);

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonList>
          {wordCards.map((content, key) => {
            return (
              <Card
                key={key}
                wordCards={wordCards}
                cardContent={content}
                idx={key}
                deleteCard={deleteCard}
              />
            );
          })}
        </IonList>

        <IonAlert
          isOpen={showModal}
          onDidDismiss={() => setShowModal(false)}
          cssClass="my-custom-class"
          header={"単語帳を新たに追加"}
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "名前",
            },
          ]}
          buttons={[
            {
              text: "キャンセル",
              role: "cancel",
            },
            {
              text: "OK",
              handler: (data) => {
                console.log(data.name);
                if (data.name.length > 0) {
                  let bookdata = [...wordCards];
                  bookdata.unshift({ title: data.name });
                  setWordCards(bookdata);
                }
              },
            },
          ]}
        />

        <Addbutton handleClick={handleClick} />
      </IonContent>
    </IonPage>
  );
};

export default MainPage;
