import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonItem, IonCardHeader, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useEffect, useState } from 'react';

const Quiz = () => {
  const [wordCards, setWordCards] = useState([]);
  useEffect(() => {
    if (localStorage.array) { 
      const saveDate = JSON.parse(localStorage.array);
      setWordCards(saveDate);
    }
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">クイズ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">クイズ</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/*<ExploreContainer name="Tab 2 page" />*/}
        <IonList>
          {wordCards.map((content, key) => {
            return (
              <IonItem key={key}>
                <IonCardHeader>
                  <IonCardTitle>{content.title}</IonCardTitle>
                </IonCardHeader>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
export default Quiz;
