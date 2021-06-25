import React, { useState } from 'react';
import { IonItem,IonActionSheet, IonButton, IonCard, IonCardHeader, IonCardTitle, IonModal,IonContent } from "@ionic/react"
import { trash, share, caretForwardCircle, heart, close} from 'ionicons/icons';
import Cardcontent from './Cardcontent';
import ModalHeader from './ModalHeader';

const Card = (props) => {
    const [word, setWord] = useState([]);
    const [showActionSheet, setShowActionSheet] = useState(false);
    const [showModal, setShowModal] = useState(false);
    console.log(props.idx);
    return (
        <div>
        <IonItem onClick={() => setShowActionSheet(true)}>

            <IonCardHeader>
            <IonCardTitle>{props.cardContent.title}</IonCardTitle>
            </IonCardHeader>

            <IonActionSheet
            isOpen={showActionSheet}
            onDidDismiss={() => setShowActionSheet(false)}
            buttons={[
                {
                    text:'Delete',
                    role:'destructive',
                    icon: trash,
                    handler: () => {
                        console.log(props.idx);
                        props.deleteCard(props.idx);
                    }
                },
                {
                    text: '単語帳を見る',
                    icon: caretForwardCircle,  
                    handler: () => {
                        //モーダルの表示
                        setShowModal(true);
                    }
                },

                {
                    text:'単語を追加',
                    icon: caretForwardCircle,  
                    handler: () => {
                        //モーダルの表示
                        window.location.href = "quiz";
                    }
                },
                {
                    text:'キャンセル',
                    role:'cancel',
                    icon: close,
                },
          
            ]}>

            </IonActionSheet>
            </IonItem>

            <IonModal isOpen={showModal}  swipeToClose={true} style={{position:"absolute", top: "80%"}}>

                <ModalHeader setShowModal ={setShowModal}/>
                <Cardcontent/>
            </IonModal>
        
            </div>

    )
}

export default Card;