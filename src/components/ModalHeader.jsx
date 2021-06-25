import {IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons} from "@ionic/react";

const ModalHeader = (props) => {
    return (
        <IonHeader>
            <IonToolbar>
              <IonTitle>wordcards</IonTitle>
              <IonButtons slot="start">
                  <IonBackButton  onClick={()=>props.setShowModal(false)} />
              </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}

export default ModalHeader;
