import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonButtons,
} from "@ionic/react";

const Header = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>wordcards</IonTitle>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
