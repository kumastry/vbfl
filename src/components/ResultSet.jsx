import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonButton,
  IonText,
} from "@ionic/react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ResultSet = ({ correct, wordCardsLength }) => {
  return (
    <IonContent fullscreen>
      <IonGrid>
        <IonCard>
          <IonRow>
            <IonCol>
              <IonText>正解率</IonText>

              <CircularProgressbar
                value={correct}
                maxValue={wordCardsLength}
                text={`${(correct / wordCardsLength) * 100} %`}
              />
            </IonCol>

            <IonCol className="ion-margin">
              <IonText>何か</IonText>
              <CircularProgressbar
                value={correct}
                maxValue={wordCardsLength}
                text={correct}
              />
            </IonCol>
            {/* <IonCol className="ion-margin">
              <IonText>何か</IonText>
              <CircularProgressbar
                value={correct}
                maxValue={wordCardsLength}
                text={correct}
              />
            </IonCol> */}
          </IonRow>
        </IonCard>
      </IonGrid>
    </IonContent>
  );
};

export default ResultSet;
