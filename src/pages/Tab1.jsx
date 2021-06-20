import { IonContent, IonList, IonPage, IonAlert, IonItem} from '@ionic/react';
import Addbutton from '../components/Addbutton';
import Card from '../components/Card';
import Header from '../components/Header';
import Cardcontent from '../components/Cardcontent';
import React, { useState } from 'react';

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [wordCards, setWordCards] = useState([]);
  
  const handleClick= () => {
    setShowModal(true);
  }

  const deleteCard = (key) => {
    let tmp = wordCards.slice(0, wordCards.length);
    tmp.splice(key, 1);
    setWordCards(tmp);
  }


  return (
    <IonPage>
      <Header/>
      <IonContent>

        <IonList>
          {wordCards.map((content, key) => {
            return <Card cardContent = {content} key = {key} deleteCard = {deleteCard}/>;
          })}
        </IonList>

        <IonAlert 
        isOpen = {showModal} 
        onDidDismiss={() => setShowModal(false)}
        cssClass='my-custom-class'
        header={'Alert'}
        message={'This is an alert message.'}

        inputs = { [{
          name:'name',
          type:'text',
          placeholder: '名前'
        }] }
        
        buttons={[{
          text:'キャンセル',
          role: 'cancel'
        },
        {
          text:'OK',
          handler: data => {
            console.log(data.name);
            let bookdata = wordCards;
            bookdata.unshift({title:data.name});
            setWordCards(bookdata);
          }
        } ]}
        />

        <Addbutton handleClick = {handleClick}/>
      </IonContent>
    </IonPage>
  );
};

export default MainPage;
