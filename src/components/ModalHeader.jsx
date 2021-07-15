import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
} from "@ionic/react";

const ModalHeader = (props) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>wordcards</IonTitle>
        <IonButtons slot="start">
          <IonButton onClick={() => props.setShowModal(false)}>
            閉じる
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default ModalHeader;
