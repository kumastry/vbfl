import React, { useState } from 'react';
import { IonModal, IonButton, IonContent, IonCardHeader, IonToolbar, IonTitle, IonCardSubtitle } from '@ionic/react';
import { IonSlides, IonSlide, IonCard} from '@ionic/react';

const slideOpts = {
  initialSlide: 1,
  speed: 700
};


const style = {
  Height: "100%",
  display: "flex",
  AlignItems: "center",
  JustifyContent: "center"
}
export const ModalExample = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonContent>
      <IonModal isOpen={showModal} >
      <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
      <div style={style}>
      <IonCard>
          <IonCardHeader>
            <IonTitle>ffffffdfaffafafafaff</IonTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        </div>
      </IonSlide>
      <IonSlide>
      <IonCard>
          <IonCardHeader>
            <IonTitle>ffffffdfaffafafafaff</IonTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard>
          <IonCardHeader>
            <IonTitle>ffffffdfaffafafafaff</IonTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
    </IonSlides>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
    </IonContent>
  );
};

export default ModalExample;