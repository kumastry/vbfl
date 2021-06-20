import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Quiz = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>設定</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">設定</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer name="Tab 2 page" />
        </IonContent>
      </IonPage>
    );
  };
  
  export default Quiz;